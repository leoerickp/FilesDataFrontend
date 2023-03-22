import { useSelector } from "react-redux";
import { SelectFile } from "../components/SelectFile"
import { Spinner } from "../components/Spinner"

export const Header = () => {
    const { isLoading } = useSelector(state => state.filesDataSlice);
    return (
        <div className="position-fixed top-0 w-100 text-white bg-danger p-1 px-md-5 px-lg-10 fs-4 d-flex gap-3 justify-content-between">
            <div>
                React Test App
            </div>
            <div >
                <div className="d-flex gap-1 justify-content-between" >
                    {isLoading && <Spinner />}
                    <SelectFile />
                </div>
            </div>
        </div>
    )
}
