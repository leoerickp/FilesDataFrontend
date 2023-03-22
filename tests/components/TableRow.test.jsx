import { render, screen } from "@testing-library/react";
import { TableRow } from '../../src/components/TableRow';

describe('TableHead Component testing', () => {
    test('should be shown', () => {
        const fileData = {
            "file": "test2.csv",
            "lines": [
                {
                    "text": "lfFoYWyYFdOLUjojqIaHPGeAHknpjeae",
                    "number": "25914574278332408631508122846994",
                    "hex": "cf71e5d19f74a26b67e773f7ff21e0e2"
                }
            ]
        }
        render(<table className="table table-striped table-hover"><tbody><TableRow key={fileData.file} fileData={fileData} /></tbody></table>);
        expect(screen.getByText(fileData.file)).toBeTruthy();
        expect(screen.getByText(fileData.lines[0].text)).toBeTruthy();
        expect(screen.getByText(fileData.lines[0].number)).toBeTruthy();
        expect(screen.getByText(fileData.lines[0].hex)).toBeTruthy();
    });
});