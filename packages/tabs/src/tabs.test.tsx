import '@testing-library/jest-dom/extend-expect';

import { ResizeObserver as Polyfill } from '@juggle/resize-observer';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Fragment, useState } from 'react';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from './tabs';

window.ResizeObserver = Polyfill;

function TestPanel({ children }: { children: string }) {
  const [checked, setChecked] = useState(false);

  return (
    <Fragment>
      <label>
        <input
          type="checkbox"
          data-testid={`${children}-checkbox`}
          checked={checked}
          onChange={() => setChecked(prevChecked => !prevChecked)}
        />
        {children}
      </label>
    </Fragment>
  );
}

function TestCase() {
  return (
    <Tabs defaultIndex={1}>
      <TabList>
        <Tab data={{ testId: 'tab-1' }}>First</Tab>
        <Tab data={{ testId: 'tab-2' }}>Second</Tab>
        <Tab data={{ testId: 'tab-3' }}>Third</Tab>
      </TabList>
      <TabPanels>
        <TabPanel data={{ testId: 'panel-1' }}>
          <TestPanel>panel-1</TestPanel>
        </TabPanel>
        <TabPanel data={{ testId: 'panel-2' }}>
          <TestPanel>panel-2</TestPanel>
        </TabPanel>
        <TabPanel data={{ testId: 'panel-3' }}>
          <TestPanel>panel-3</TestPanel>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

function renderTabs() {
  const { getAllByRole, getByRole, getByLabelText, getByTestId } = render(
    <TestCase />
  );

  return {
    getAllByRole,
    getByRole,
    getByLabelText,
    getByTestId,
  };
}

describe('Tabs', () => {
  describe('Uncontrolled state', () => {
    it('should select the first tab by default', () => {
      const { getAllByRole } = renderTabs();
      const [, secondTab] = getAllByRole('tab');
      const [firstVisibleTab] = getAllByRole('tabpanel');

      expect(secondTab.getAttribute('aria-controls')).toBe(
        firstVisibleTab.getAttribute('id')
      );
      expect(secondTab.getAttribute('aria-selected')).toBe('true');
    });

    it('should select second tab when clicked and show second panel', async () => {
      const { getAllByRole } = renderTabs();
      const [firstTab, secondTab, thirdTab] = getAllByRole('tab');
      expect(firstTab.getAttribute('aria-selected')).toBe('false');
      expect(secondTab.getAttribute('aria-selected')).toBe('true');
      expect(thirdTab.getAttribute('aria-selected')).toBe('false');

      await userEvent.click(secondTab);

      const [firstPanel, secondPanel, thirdPanel] = getAllByRole('tabpanel', {
        hidden: true,
      });
      // Second tab button should be selected
      expect(firstTab.getAttribute('aria-selected')).toBe('false');
      expect(secondTab.getAttribute('aria-selected')).toBe('true');
      expect(thirdTab.getAttribute('aria-selected')).toBe('false');

      expect(firstPanel.getAttribute('data-state')).toBe('inactive');
      expect(secondPanel.getAttribute('data-state')).toBe('active');
      expect(thirdPanel.getAttribute('data-state')).toBe('inactive');

      expect(secondPanel.getAttribute('id')).toBe(
        secondTab.getAttribute('aria-controls')
      );
    });

    it('should persist state between tab changes when renderInactivePanels is set', async () => {
      const { getAllByRole, getByTestId } = renderTabs();
      const [firstTab, secondTab] = getAllByRole('tab');

      const checkboxTestId = 'panel-1-checkbox';

      await userEvent.click(getByTestId(checkboxTestId));

      expect(getByTestId(checkboxTestId)).toBeChecked();

      await userEvent.click(secondTab);
      expect(getByTestId(checkboxTestId)).toBeChecked();

      await userEvent.click(firstTab);

      expect(getByTestId(checkboxTestId)).toBeChecked();
    });
  });

  describe('Aria', () => {
    it('should should only show the active panel', () => {
      const { getAllByRole } = renderTabs();
      const allPanels = getAllByRole('tabpanel', { hidden: true });
      expect(allPanels.length).toBe(3);
      const visiblePanels = getAllByRole('tabpanel');
      expect(visiblePanels.length).toBe(1);
    });

    it('should mark the selectedItem tab as selected and show the associated panel', async () => {
      const { getAllByRole } = renderTabs();
      const [firstTab, secondTab, thirdTab] = getAllByRole('tab');
      const visiblePanels = getAllByRole('tabpanel');

      expect(secondTab.getAttribute('aria-selected')).toBe('true');
      expect(visiblePanels.length).toBe(1);

      await userEvent.click(thirdTab);
      expect(firstTab.getAttribute('aria-selected')).toBe('false');
      expect(thirdTab.getAttribute('aria-selected')).toBe('true');
    });

    it('should focus selected tab and then the selected panel when tabbing through the component', async () => {
      const { getAllByRole } = renderTabs();
      const [, secondTab] = getAllByRole('tab');
      const visiblePanels = getAllByRole('tabpanel');

      expect(document.body).toHaveFocus();
      await userEvent.tab();
      expect(secondTab).toHaveFocus();
      await userEvent.tab();
      expect(visiblePanels[0]).toHaveFocus();
    });

    it('should navigate through horizontal tablist with horizontal arrows only', async () => {
      const { getAllByRole } = renderTabs();
      const [firstTab, secondTab, thirdTab] = getAllByRole('tab');

      // Focus selected tab
      await userEvent.tab();

      // Test horizontal navigation works
      expect(secondTab).toHaveFocus();
      await userEvent.keyboard('{arrowright}');
      expect(thirdTab).toHaveFocus();
      await userEvent.keyboard('{arrowright}');
      expect(firstTab).toHaveFocus();
      await userEvent.keyboard('{arrowright}');
      expect(secondTab).toHaveFocus();
      await userEvent.keyboard('{arrowleft}');
      expect(firstTab).toHaveFocus();
      await userEvent.keyboard('{arrowleft}');
      expect(thirdTab).toHaveFocus();
      await userEvent.keyboard('{arrowleft}');
      expect(secondTab).toHaveFocus();
    });

    it('should navigate to last tab with the end key', async () => {
      const { getAllByRole } = renderTabs();
      const [, , thirdTab] = getAllByRole('tab');

      // Focus selected tab and move focus to the last tab
      await userEvent.tab();
      await userEvent.keyboard('{end}');

      expect(thirdTab).toHaveFocus();
    });

    it('should navigate to first tab with the home key', async () => {
      const { getAllByRole } = renderTabs();
      const [firstTab] = getAllByRole('tab');

      // Focus selected tab and mmove focus to the first tab
      await userEvent.tab();
      await userEvent.keyboard('{home}');

      expect(firstTab).toHaveFocus();
    });

    it('should select the focused tab with the space key', async () => {
      const { getAllByRole } = renderTabs();
      const [firstTab] = getAllByRole('tab');

      // Focus selected tab and move focus to the left
      await userEvent.tab();
      await userEvent.keyboard('{arrowleft}');

      // Test commit tab selection with space
      await userEvent.keyboard(' ');

      expect(firstTab).toHaveFocus();
      expect(firstTab.getAttribute('aria-selected')).toBe('true');
    });

    it('should select the focused tab with the enter key', async () => {
      const { getAllByRole } = renderTabs();
      const [, , thirdTab] = getAllByRole('tab');

      // Focus selected tab and move focus to the right
      await userEvent.tab();
      await userEvent.keyboard('{arrowright}');

      // Test commit tab selection with enter
      await userEvent.keyboard('{enter}');

      expect(thirdTab).toHaveFocus();
      expect(thirdTab.getAttribute('aria-selected')).toBe('true');
    });
  });
});
