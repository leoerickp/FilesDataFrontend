import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from '../store/slices/filesData/thunk';

export const useDataSourceHandler = () => {
    const dispatch = useDispatch();
    const { dataSource } = useSelector(state => state.filesDataSlice);
    useEffect(() => {
        dispatch(getData());
    }, []);
    return { dataSource }
}