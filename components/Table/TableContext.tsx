import { createContext } from 'react';
import { Column } from './Column';

export interface TableContextProps<T extends Object> {
  columns: Column<T>[];
  data: T[];
}

export const TableContext = createContext<TableContextProps<any>>({ columns: [], data: [] });
