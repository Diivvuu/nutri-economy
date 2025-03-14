import { useEffect } from 'react';
import { toast } from 'sonner';
import { useSelector, useDispatch } from 'react-redux';
import { clearError } from '../redux/errorSlice';
import { RootState } from '../redux/store';

const ErrorToast = () => {
  const error = useSelector((state: RootState) => state.error.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  return null;
};

export default ErrorToast;
