import { useContext } from 'react';
import { Column } from './Column';
import { TableContext, TableContextProps } from './TableContext';
import { TableRow } from './TableRow';

interface TableBodyProps<T extends Object> {
  rowKey?: string;
}
export function TableBody<T extends Object>(props: TableBodyProps<T>) {
  const { data, columns } = useContext<TableContextProps<T>>(TableContext);

  return (
    <tbody>
      {data.map((record, index) => (
        <TableRow key={props.rowKey || index} record={record}></TableRow>
      ))}
    </tbody>
  );
}
