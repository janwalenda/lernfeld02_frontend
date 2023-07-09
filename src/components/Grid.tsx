import { GridProps } from '../interfaces/GridProps';
import styles from '../styles/Grid.module.scss';

export function Grid({ columnDefs, rowData }: GridProps) {
  return (
    <div className={styles.gridWrapper} key={styles.gridWrapper}>
      <table>
        <thead key="theadGrid">
          <tr>
            {columnDefs.map(columnDef => {
              return (
                <th key={columnDef.field}>
                  {columnDef.field}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody key="tbodyGrid">
          {rowData.map(row => { 
            const values = Object.values(row);
            return (
              <tr key={row.id}>
                {columnDefs.map((_, i) => {
                  const value = values[i]
                  return (
                    <td key={value}>{value}</td>
                  );
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
