// import s from './Alert.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const notify = () => toast.error('incorrect username or password!');

export default function Alert() {
  return notify;
}
