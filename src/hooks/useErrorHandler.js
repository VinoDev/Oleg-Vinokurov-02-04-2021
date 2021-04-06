import { useSnackbar } from 'notistack';
import { useSelector } from "react-redux";

const useErrorHandler = () => {

    const { enqueueSnackbar } = useSnackbar();
    const { error } = useSelector((state) => state.weather);

    const showErrorMessage = (error) => {
        enqueueSnackbar(error, {variant: "error", preventDuplicate: true})
    }

    return {showErrorMessage, error}
}

export default useErrorHandler