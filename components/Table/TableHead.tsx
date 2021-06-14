import { useContext } from 'react';
import { Column } from './Column';
import { TableContext, TableContextProps } from './TableContext';
import { TableHeadCell } from './TableHeadCell';

interface TableHeadProps<T> {}

export function TableHead<T>(props: TableHeadProps<T>) {
  const { columns, data } = useContext<TableContextProps<T>>(TableContext);

  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <TableHeadCell key={column.key || (column.dataIndex as string) || index}>
            {column.title}
          </TableHeadCell>
        ))}
      </tr>
    </thead>
  );
}
