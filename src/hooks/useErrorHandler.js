import { useDispatch } from "react-redux";
import { useSnackbar } from 'notistack';
import weatherSlice from '../state/weatherSlice.js';

const useErrorHandler = () => {

    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const { clearError } = weatherSlice.actions;

    const showErrorMessage = (error) => {
        enqueueSnackbar(error, {variant: "error"})
        dispatch(clearError())
    }

    return {showErrorMessage}
}

export default useErrorHandler