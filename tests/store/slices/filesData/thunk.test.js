import { filesDataAPI } from "../../../../src/api/files-data-api";
import { startLoading, setDataSource } from "../../../../src/store/slices/filesData/filesData.slice";
import { getData } from "../../../../src/store/slices/filesData/thunk";

describe('filesData thunk testing', () => {
    const dispatch = jest.fn();
    beforeEach(() => jest.clearAllMocks());
    test('should update state with files data', async () => {
        const { data } = await filesDataAPI.get(`/files/data?fileName=test2.csv`);
        await getData('test2.csv')(dispatch);
        expect(dispatch).toHaveBeenCalledWith(startLoading());

        expect(dispatch).toHaveBeenCalledWith(setDataSource(data));
    }, 10000);
})

