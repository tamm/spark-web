import '@testing-library/jest-dom';

import type { IconProps } from '@spark-web/icon';
import { CalendarIcon } from '@spark-web/icon';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { Alert } from './alert';

function TestAlert() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <Alert
      tone="caution"
      heading="This is a caution alert"
      closeLabel="Dismiss alert"
      onClose={() => setIsOpen(false)}
    >
      Click the button on the right to dismiss this notification
    </Alert>
  );
}

function renderAlert() {
  return render(<TestAlert />);
}

describe('Alert component', () => {
  afterEach(cleanup);

  it('should render correctly with the minimum set of props, without crashing', () => {
    const { container } = render(<Alert tone="info">Test</Alert>);
    expect(container).toBeDefined();
  });

  it('should display data props when passed down', () => {
    const testString = 'Test string';
    const { container } = render(
      <Alert data={{ testAttr: 'some attr' }} tone="info">
        {testString}
      </Alert>
    );
    const alertEl = container.firstElementChild;
    expect(alertEl?.getAttribute('data-testattr')).toEqual('some attr');
  });

  it('onClose event should fire', async () => {
    const { getByRole } = renderAlert();
    const alert = getByRole('alert');
    expect(alert).toBeInTheDocument();

    await userEvent.tab();
    await userEvent.keyboard('{enter}');
    expect(alert).not.toBeInTheDocument();
  });

  it('should support custom icons', async () => {
    function Icon(props: IconProps) {
      return <CalendarIcon data={{ testId: 'icon' }} {...props} />;
    }
    const { getByTestId } = render(
      <Alert tone="info" icon={Icon}>
        Repayment date
      </Alert>
    );
    expect(getByTestId('icon')).toBeInTheDocument();
  });
});
