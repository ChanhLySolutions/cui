import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Column } from './Column';
import { TableBody } from './TableBody';
import { TableContext } from './TableContext';
import { TableHead } from './TableHead';

export interface TableProps<T extends Object> {
  rowKey?: string;
  columns: Column<T>[];
  header?: ReactNode;
  footer?: ReactNode;
  caption?: ReactNode;
  border?: boolean;
  data: T[];
  layout?: 'auto' | 'fixed';
}

const StyledTable = styled.table<Partial<TableProps<Object[]>>>`
  ${(props) =>
    props.border &&
    css`
      border-collapse: collapse;
        td {
          border-width: 1px;
        } 
        th {
          border-width: 1px;
        }
      }
    `}
`;

export function Table<T>(props: TableProps<T>) {
  const { columns, data, layout = 'auto', border } = props;
  return (
    <TableContext.Provider value={{ columns, data }}>
      <div>
        <div hidden={!props.header}>{props.header}</div>
        <StyledTable border={border}>
          <caption hidden={!props.caption}>{props.caption}</caption>
          <TableHead></TableHead>
          <TableBody rowKey={props.rowKey}></TableBody>
        </StyledTable>
        <div hidden={!props.footer}>{props.footer}</div>
      </div>
    </TableContext.Provider>
  );
}
