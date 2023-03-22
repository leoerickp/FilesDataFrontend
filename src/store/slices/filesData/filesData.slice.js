import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    dataSource: [],
    filesAvailable: [],
    count: 0,
    errorMessage: null,
    canGetData: false,
    successMessage: '',
}
export const filesDataSlice = createSlice({
    name: 'filesData',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.successMessage = '';
            state.isLoading = true;
        },
        stopLoading: (state) => {
            state.isLoading = false;
        },
        setDataSource: (state, action) => {
            state.dataSource = action.payload;
            state.count = state.dataSource.length;
            if (state.count > 1) {
                state.filesAvailable = state.dataSource.map(fileData => fileData.file);
            }
            state.isLoading = false;
            state.canGetData = false;
        },
        throwError: (state, action) => {
            state.errorMessage = action.payload;
            state.isLoading = false;
        },
        setCanGetData: (state, action) => {
            state.canGetData = action.payload;
        },
        eraseErrorMessage: (state) => {
            state.errorMessage = null;
        },
        setSuccessMessage: (state, action) => {
            state.successMessage = action.payload;
        }
    },
})

export const {
    eraseErrorMessage,
    startLoading,
    stopLoading,
    setDataSource,
    throwError,
    setCanGetData,
    setSuccessMessage,
} = filesDataSlice.actions