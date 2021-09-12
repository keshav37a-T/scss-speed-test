import "./table.scss";

const Table = () => {
  return (
    <table className="tableClass">
      <thead>
        <tr className={`tableRow`}>
          <th className="tableHeader">S.No</th>
          <th className="tableHeader">Header1</th>
          <th className="tableHeader">Header2</th>
          <th className="tableHeader">Header3</th>
          <th className="tableHeader">Header4</th>
          <th className="tableHeader">Header5</th>
        </tr>
      </thead>
      <tbody>
        {Array(11000)
          .fill(0)
          .map((a, index) => (
            <tr className={`tableRow background-${index % 3}`}>
              <td>{index + 1}</td>
              <td>The cell body</td>
              <td>The cell body</td>
              <td>The cell body</td>
              <td>The cell body</td>
              <td>The cell body</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
