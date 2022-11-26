import React from 'react';
import {
  Button,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

export type ButtonProps = {
  /**
   * a message to be rendered in the special component.
   */
  message?: string
} & MuiButtonProps;

const defaultMessage = 'This is a customised MUI button!';

export function MuiButton({
  message = defaultMessage,
  children,
  className,
  ...rest
}: ButtonProps) {
  function handleClick() {
    alert(message);
  }

  return (
    <Button classes={className} onClick={handleClick} {...rest}>
      {children}
    </Button>
  );
}
