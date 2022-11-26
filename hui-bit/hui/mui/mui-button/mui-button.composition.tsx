import React from 'react';
import { MuiButton } from './mui-button';

export const MuiButtonVariants = () => {
  const variants = ['contained', 'outlined', 'text'] as const;

  return (
    <div className="vertical">
      {variants.map((v, index) => (
        <>
          <MuiButton key={index} variant={v}>
            MUI Button {v} variant
          </MuiButton>
          <br />
          <br />
        </>
      ))}
    </div>
  );
};

export const MuiButtonColors = () => {
  const colors = [
    'inherit',
    'primary',
    'secondary',
    'success',
    'error',
    'info',
    'warning',
  ] as const;

  return (
    <>
      {colors.map((c, index) => (
        <MuiButton key={index} color={c}>
          MUI Button {c}
        </MuiButton>
      ))}
    </>
  );
};

export const MuiButtonSizes = () => {
  const sizes = ['small', 'medium', 'large'] as const;

  return (
    <div className="vertical">
      {sizes.map((s, index) => (
        <>
          <MuiButton key={index} variant="outlined" size={s}>
            {s} MUI Button
          </MuiButton>
          <br />
          <br />
        </>
      ))}
    </div>
  );
};

export const MuiButtonDisabled = () => (
  <MuiButton variant="contained" disabled>
    Disabled :(
  </MuiButton>
);