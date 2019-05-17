import { DatagridHeader } from './datagrid-header.model';
import { DatagridContent } from './datagrid-content.model';

export interface Datagrid {
  header: DatagridHeader[],
  content: Array<DatagridContent[]>,
  allData: {},
}
