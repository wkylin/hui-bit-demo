import React from 'react';
import { render } from '@testing-library/react';
import { BasicAntdLoading } from './antd-loading.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAntdLoading />);
  const rendered = getByText('Loading');
  expect(rendered).toBeInTheDocument();
});
