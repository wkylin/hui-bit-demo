import React, { ReactNode } from 'react';
import styles from './index.module.less'

export type SayHelloProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function SayHello({ children }: SayHelloProps) {
  return (
    <div className={styles['font-color']}>
      {children}
    </div>
  );
}
