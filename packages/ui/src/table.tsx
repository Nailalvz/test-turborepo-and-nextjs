const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <table className="ui-w-full ui-mt-4">
      <thead>
        <tr className="ui-text-left ui-text-gray-500 ui-text-sm">
          {columns.map((col) => (
            <th key={col.accessor} className={col?.className}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
