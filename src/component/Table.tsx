import { ClassWiseStatistics } from "../interfaces/interface";

const Table = ({ data, property }: { data: ClassWiseStatistics, property: string }) => {
  const alcoholClasses = Object.keys(data);
  
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Measure</th>
          {alcoholClasses.map((alcoholClass) => (
            <th key={alcoholClass}>Class {alcoholClass}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{property} Mean</td>
          {alcoholClasses.map((alcoholClass) => (
            <td key={alcoholClass}>{data[alcoholClass].mean.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>{property} Median</td>
          {alcoholClasses.map((alcoholClass) => (
            <td key={alcoholClass}>{data[alcoholClass].median.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>{property} Mode</td>
          {alcoholClasses.map((alcoholClass) => (
            <td key={alcoholClass}>{data[alcoholClass].mode.toFixed(3)}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
