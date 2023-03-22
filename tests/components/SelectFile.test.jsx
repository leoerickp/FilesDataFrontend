import { fireEvent, render, screen } from "@testing-library/react";
import * as redux from 'react-redux';
import { SelectFile } from '../../src/components/SelectFile';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
    useSelector: () => (fn) => fn(),
}));
const mockGetData = jest.fn();
jest.mock('../../src/store/slices/filesData/thunk.js', () => ({
    getData: () => mockGetData,
}));

describe('SelectFile component testing', () => {
    const dispatch = jest.fn();
    beforeEach(() => jest.clearAllMocks());
    test('should be shown', () => {
        const spy = jest.spyOn(redux, 'useSelector')
        spy.mockReturnValue({ filesAvailable: ['test2.csv', 'test3.csv'], isLoading: true })
        render(<SelectFile />);
        expect(screen.getByText('All files')).toBeTruthy();
        expect(screen.getByText('test2.csv')).toBeTruthy();
        expect(screen.getByText('test3.csv')).toBeTruthy();
    });
    test('should be changed', () => {
        const spy = jest.spyOn(redux, 'useSelector')
        spy.mockReturnValue({ filesAvailable: ['test2.csv', 'test3.csv'], isLoading: true })
        render(<SelectFile />);
        const select = screen.getByLabelText('Default select file name');
        fireEvent.change(select);
        expect(mockGetData).toHaveBeenCalled();
    });
});