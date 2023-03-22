import { render, screen } from "@testing-library/react";
import { TableHead } from '../../src/components/TableHead';

describe('TableHead Component testing', () => {
    test('should be shown', () => {
        render(<table className="table table-striped table-hover"><TableHead /></table>);
        expect(screen.getByText('File Name')).toBeTruthy();
        expect(screen.getByText('Text')).toBeTruthy();
        expect(screen.getByText('Number')).toBeTruthy();
        expect(screen.getByText('Hex')).toBeTruthy();
    });
});