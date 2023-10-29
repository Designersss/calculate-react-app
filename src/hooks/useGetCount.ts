import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";


export const useGetCount = () => {
    return useSelector((state: RootState) => state.count)
}