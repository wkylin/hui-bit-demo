import React, { ReactNode } from 'react';
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export type AntdLoadingProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  tip?: string;
};
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
export function AntdLoading({ tip="Loading" }: AntdLoadingProps) {
  return (
    <div>
      <Spin indicator={antIcon} tip={tip} />
    </div>
  );
}
