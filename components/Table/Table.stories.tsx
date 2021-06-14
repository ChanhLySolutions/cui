import { Table, TableProps } from './Table';

const data = { id: '1', string: 'a', date: '0/0/0', number: 0 };

const args: TableProps<typeof data> = {
  data: [data],
  columns: [
    { title: 'Id', dataIndex: 'id' },
    { title: 'String', dataIndex: 'string' },
    { title: 'Date', dataIndex: 'date' },
    { title: 'Number', dataIndex: 'number' },
  ],
  border: true,
};

const tableStories = {
  title: 'Components/Table',
  components: Table,
  argsType: {},
  args,
};

export default tableStories;

export function Default(props) {
  return <Table {...props}></Table>;
}
Default.args = {};
