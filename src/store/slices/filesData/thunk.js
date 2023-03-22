import { filesDataAPI } from "../../../api/files-data-api";
import { setDataSource, startLoading, throwError } from "./filesData.slice";

export const getData = (fileName = '') => {
    return async (dispatch) => {
        try {
            const query = (fileName !== '') ? `?fileName=${fileName}` : '';
            dispatch(startLoading());

            const { data } = await filesDataAPI.get(
                `/files/data${query}`
            );
            dispatch(setDataSource(data));
        } catch (error) {
            const { statusText, data } = error.response;
            dispatch(throwError({ statusText, statuscode: data.statuscode, message: data.message }));
        }
    };
}