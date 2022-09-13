import '@testing-library/jest-dom';

import { Field } from '@spark-web/field';
import { render } from '@testing-library/react';

import { Select } from './select';

const LABEL = 'Test label';
const DESCRIPTION = 'Test description';
const MESSAGE = 'Test message';
const PLACEHOLDER = 'Test placeholder';
const OPTIONS = [
  {
    label: 'Label 1',
    value: 'value-1',
  },
  {
    label: 'Label 2',
    value: 'value-2',
  },
  {
    label: 'Label 3',
    value: 'value-3',
  },
];

describe('Select', () => {
  it('associates field with label correctly', () => {
    const { getByLabelText } = render(
      <Field label={LABEL}>
        <Select options={OPTIONS} />
      </Field>
    );
    expect(getByLabelText(LABEL).tagName).toBe('SELECT');
  });

  it('associates field with description correctly', () => {
    const { getByRole, getByText } = render(
      <Field label={LABEL} description={DESCRIPTION}>
        <Select options={OPTIONS} />
      </Field>
    );
    const description = getByText(DESCRIPTION);
    const select = getByRole('combobox');
    expect(select.getAttribute('aria-describedby')).toBe(description.id);
    expect(select).toHaveAccessibleDescription(DESCRIPTION);
  });

  it('associates field with message correctly', () => {
    const { getByRole, getByText } = render(
      <Field label={LABEL} message={MESSAGE}>
        <Select options={OPTIONS} />
      </Field>
    );
    const message = getByText(MESSAGE);
    const select = getByRole('combobox');
    expect(select.getAttribute('aria-describedby')).toBe(message.id);
    expect(select).toHaveAccessibleDescription(MESSAGE);
  });

  it('field is not marked as having a description without a message or description', () => {
    const { getByLabelText } = render(
      <Field label={LABEL}>
        <Select options={OPTIONS} />
      </Field>
    );

    expect(getByLabelText(LABEL).getAttribute('aria-describedby')).toBeNull();
  });

  it("field has placeholder option selected when option isn't selected", () => {
    const { getByLabelText } = render(
      <Field label={LABEL}>
        <Select options={OPTIONS} placeholder={PLACEHOLDER} />
      </Field>
    );

    const select = getByLabelText(LABEL) as HTMLSelectElement;

    expect(select.selectedIndex).toBe(0);
    expect(select.options.length).toEqual(OPTIONS.length + 1);

    const placeholderOption = select.options[0];
    expect(placeholderOption.text).toEqual(PLACEHOLDER);
    expect(placeholderOption.value).toEqual('');
    expect(placeholderOption.disabled).toEqual(true);

    expect(select.options[1].text).toEqual(OPTIONS[0].label);
  });

  it('field still shows disabled placeholder option when another option is selected', () => {
    const { getByLabelText } = render(
      <Field label={LABEL}>
        <Select
          options={OPTIONS}
          placeholder={PLACEHOLDER}
          value={OPTIONS[0].value}
          onChange={() => null}
        />
      </Field>
    );

    const select = getByLabelText(LABEL) as HTMLSelectElement;

    expect(select.selectedIndex).toBe(1);
    expect(select.options.length).toEqual(OPTIONS.length + 1);

    const placeholderOption = select.options[0];
    expect(placeholderOption.text).toEqual(PLACEHOLDER);
    expect(placeholderOption.value).toEqual('');
    expect(placeholderOption.disabled).toEqual(true);

    expect(select.options[1].text).toEqual(OPTIONS[0].label);
  });

  it('field should be missing blank option when an option is selected', () => {
    const { getByLabelText } = render(
      <Field label={LABEL}>
        <Select
          options={OPTIONS}
          value={OPTIONS[0].value}
          onChange={() => null}
        />
      </Field>
    );

    const select = getByLabelText(LABEL) as HTMLSelectElement;

    expect(select.selectedIndex).toBe(0);
    expect(select.options.length).toEqual(OPTIONS.length);
    expect(select.options[0].text).toEqual(OPTIONS[0].label);
  });
});
