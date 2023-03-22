import { configureStore } from "@reduxjs/toolkit";
import { filesDataSlice } from "./slices/filesData/filesData.slice";

export default configureStore({
    reducer: {
        filesDataSlice: filesDataSlice.reducer,
    },
});