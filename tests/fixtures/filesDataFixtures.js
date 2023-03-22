export const initialState = {
    isLoading: false,
    dataSource: [],
    filesAvailable: [],
    count: 0,
    errorMessage: null,
    canGetData: false,
    successMessage: '',
}
export const initialStateWithData = {
    isLoading: false,
    dataSource: [
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
    ],
    filesAvailable: [],
    count: 1,
    errorMessage: null,
    canGetData: false,
    successMessage: '',
}
export const stateWithErrorMessage = {
    isLoading: false,
    dataSource: [],
    filesAvailable: [],
    count: 0,
    errorMessage: 'Error',
    canGetData: false,
    successMessage: '',
}
export const stateWitSuccessMessage = {
    isLoading: false,
    dataSource: [],
    filesAvailable: [],
    count: 0,
    errorMessage: null,
    canGetData: false,
    successMessage: 'Success',
}