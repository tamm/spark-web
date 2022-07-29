import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { ButtonProps } from './Button';
import { Button } from './Button';

const BUTTON_TEXT = 'Hello world';
const TEST_VALUE = 'test-value';

function TestButton(props?: any) {
  return <Button {...props}>{BUTTON_TEXT}</Button>;
}

function renderButton(props?: Partial<ButtonProps>) {
  return render(<TestButton {...props} />);
}

describe('Button', () => {
  it('should show a button with expected text', () => {
    const { getByRole } = renderButton();
    expect(getByRole('button')).toHaveTextContent(BUTTON_TEXT);
  });

  it('should fire onClick function', async () => {
    const onClick = jest.fn();

    const { getByRole } = renderButton({ onClick });
    const button = getByRole('button');
    await userEvent.click(button);

    expect(onClick).toBeCalled();
  });

  it('should not fire onClick when disabled', async () => {
    const onClick = jest.fn();
    const { getByRole } = renderButton({
      disabled: true,
      onClick,
    });
    const button = getByRole('button');
    expect(button.getAttribute('aria-disabled')).toBe('true');

    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should be disabled when loading', async () => {
    const onClick = jest.fn();
    const { getByRole } = renderButton({
      loading: true,
      onClick,
    });
    const button = getByRole('button');
    expect(button.getAttribute('aria-disabled')).toBe('true');

    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should build expected test IDs', () => {
    const { getByTestId } = renderButton({ data: { testId: TEST_VALUE } });
    expect(getByTestId(TEST_VALUE)).toBeInTheDocument();
  });

  it('should build expected data attribute', () => {
    const { getByRole } = renderButton({
      data: { button: TEST_VALUE },
    });
    const button = getByRole('button');
    expect(button.getAttribute('data-button')).toBe(TEST_VALUE);
  });
});
