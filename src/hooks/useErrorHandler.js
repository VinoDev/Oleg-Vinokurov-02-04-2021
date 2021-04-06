import { useDispatch } from "react-redux";
import { useSnackbar } from 'notistack';
import { useSelector } from "react-redux";
import weatherSlice from '../state/weatherSlice.js';

const useErrorHandler = () => {

    const { enqueueSnackbar } = useSnackbar();
    const { error } = useSelector((state) => state.weather);

    const showErrorMessage = (error) => {
        enqueueSnackbar(error, {variant: "error", preventDuplicate: true})
    }

    return {showErrorMessage, error}
}

export default useErrorHandler