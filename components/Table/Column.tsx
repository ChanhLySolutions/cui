import { ReactNode } from 'react';

export interface Column<T> {
  title?: ReactNode;
  dataIndex?: keyof T;
  key?: string;
  render?: (value: unknown, record: T, index: number) => ReactNode;
  sorter?: (a: T, b: T) => number | boolean;
  width?: string | number;
  headRender?: (value: unknown, record: T, index: number) => ReactNode;
}
