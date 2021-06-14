import { ReactChild, ReactChildren, ReactNode } from 'react';

interface TableHeadCellProps {
  children?: ReactNode;
}

export function TableHeadCell(props: TableHeadCellProps) {
  return <th>{props.children}</th>;
}
