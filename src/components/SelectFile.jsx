import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/slices/filesData/thunk";

export const SelectFile = () => {
    const { filesAvailable, isLoading } = useSelector(state => state.filesDataSlice);
    const dispatch = useDispatch();
    const getDataFile = (e) => {
        dispatch(getData(e.target.value));
    }
    return (
        <select
            className="form-select"
            aria-label="Default select file name"
            onChange={getDataFile}
            disabled={isLoading}
        >
            <option value=''>All files</option>
            {
                filesAvailable.map(fileName => <option
                    key={fileName}
                    value={fileName}
                >
                    {fileName}
                </option>)
            }
        </select>
    )
}
