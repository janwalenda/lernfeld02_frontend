import { Column } from "./Column";
import { Row } from "./Row";

export interface GridProps {
  columnDefs: Column[];
  rowData: Row[];
}
