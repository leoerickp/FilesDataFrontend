import { useDataSourceHandler } from '../hooks/useDataSourceHandler';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

export const TableData = () => {
    const { dataSource } = useDataSourceHandler();
    return (
        <table className="table table-striped table-hover">
            <TableHead />
            <tbody>
                {dataSource.map((fileData) => <TableRow key={fileData.file} fileData={fileData} />)}
            </tbody>
        </table>
    )
}
