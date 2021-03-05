// import s from './Alert.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export default function Alert() {
  const notify = () => toast.error('incorrect username or password!');

  return notify;
}
