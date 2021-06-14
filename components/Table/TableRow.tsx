import { Column } from './Column';
import { TableCell } from './TableCell';

interface TableRowProps<T> {
  record: T;
}

export function TableRow<T extends Object>(props: TableRowProps<T>) {
  const { record } = props;

  return (
    <tr>
      {Object.entries(record).map(([key, value], index) => (
        <TableCell key={key} value={value} record={record} index={index}></TableCell>
      ))}
    </tr>
  );
}
