import { eraseErrorMessage, filesDataSlice, setCanGetData, setDataSource, setSuccessMessage, startLoading, stopLoading, throwError } from '../../../../src/store/slices/filesData/filesData.slice';
import { initialState, initialStateWithData, stateWithErrorMessage, stateWitSuccessMessage } from '../../../fixtures/filesDataFixtures';

describe('filesData Slice testing', () => {
    test('should be named filesData and init initialState', () => {
        expect(filesDataSlice.name).toBe('filesData');
        const state = filesDataSlice.reducer(initialState, {});
        expect(state).toEqual(initialState);
    });
    test('should be isLoading in true', () => {
        const state = filesDataSlice.reducer(initialState, startLoading());
        expect(state).toEqual({ ...initialState, isLoading: true });
    });
    test('should be isLoading in false', () => {
        const state = filesDataSlice.reducer(initialState, stopLoading());
        expect(state).toEqual({ ...initialState });
    });
    test('should charge dataSource', () => {
        const state = filesDataSlice.reducer(initialState, setDataSource([
            {
                "file": "test2.csv",
                "lines": [
                    {
                        "text": "lfFoYWyYFdOLUjojqIaHPGeAHknpjeae",
                        "number": "25914574278332408631508122846994",
                        "hex": "cf71e5d19f74a26b67e773f7ff21e0e2"
                    }
                ]
            }
        ]));
        expect(state).toEqual(initialStateWithData);
    });
    test('should be throw error message', () => {
        const state = filesDataSlice.reducer(initialState, throwError({ statusText: 'BadReques', statuscode: 400, message: 'Bad Request' }));
        expect(state).toEqual({
            ...initialState, isLoading: false,
            errorMessage: { statusText: 'BadReques', statuscode: 400, message: 'Bad Request' }
        });
    });
    test('should be canGetData true', () => {
        const state = filesDataSlice.reducer(initialState, setCanGetData(true));
        expect(state).toEqual({ ...initialState, canGetData: true });
    });
    test('should erase any error message', () => {
        const state = filesDataSlice.reducer(stateWithErrorMessage, eraseErrorMessage());
        expect(state).toEqual({ ...initialState });
    });
    test('should put success message', () => {
        const state = filesDataSlice.reducer(initialState, setSuccessMessage('Success'));
        expect(state).toEqual({ ...stateWitSuccessMessage });
    });
})