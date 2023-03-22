export const TableRow = ({ fileData }) => {
    const { file, lines } = fileData;
    return lines.map((line, index) => (
        <tr key={`${line.file}${index}`}>
            <td scope="row">{file}</td>
            <td>{line.text}</td>
            <td className="d-none d-md-table-cell">{line.number}</td>
            <td className="d-none d-lg-table-cell">{line.hex}</td>
        </tr>
    ));
}
