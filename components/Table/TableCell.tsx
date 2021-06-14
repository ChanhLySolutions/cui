interface TableCellProps<T> {
  value: any;
  record: T;
  index: number;
}

export function TableCell<T>(props: TableCellProps<T>) {
  const { value, record, index } = props;
  return <td>{value}</td>;
}
