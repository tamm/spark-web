import { css } from '@emotion/css';
import { BaseButton } from '@spark-web/button';
import { useFieldContext } from '@spark-web/field';
import { EyeIcon, EyeOffIcon } from '@spark-web/icon';
import type { TextInputProps } from '@spark-web/text-input';
import { InputAdornment, TextInput } from '@spark-web/text-input';
import { forwardRef, useState } from 'react';

import { useIconButtonStyles } from './useIconButtonStyles';

export type PasswordInputProps = Omit<
  TextInputProps,
  'children' | 'inputMode' | 'type'
>;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, forwardedRef) => {
    const [{ disabled }] = useFieldContext();
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword(!showPassword);
    const [boxProps, buttonStyles] = useIconButtonStyles();
    const Icon = showPassword ? EyeOffIcon : EyeIcon;

    return (
      <TextInput
        {...props}
        ref={forwardedRef}
        inputMode="text"
        type={showPassword ? 'text' : 'password'}
      >
        <InputAdornment placement="end">
          <BaseButton
            {...boxProps}
            aria-checked={showPassword}
            aria-label={`${showPassword ? 'Hide' : 'Show'} password`}
            className={css(buttonStyles)}
            disabled={disabled}
            onClick={toggleShowPassword}
            role="switch"
            // The input is not keyboard navigable when disabled and so we are
            // also removing the button from the tab index to make it less
            // confusing to keyboard and assitive technology users.
            tabIndex={disabled ? -1 : undefined}
          >
            <Icon tone={disabled ? 'disabled' : 'neutral'} />
          </BaseButton>
        </InputAdornment>
      </TextInput>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
