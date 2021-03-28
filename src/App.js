import {
  Suspense,
  lazy,
   useEffect
} from 'react';
import {
   useDispatch,
  useSelector,
} from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AppBar from './Components/Loging/AppBar/AppBar';
import Footer from './Components/Footer'
 import { getCurrentUser } from './Redux/Auth/authOperation';
import PrivateRoute from './Routes/PrivateRoutes';
import PublicRoute from './Routes/PublicRoutes';
import s from './App.module.scss';
import { getIsAutheticated } from './Redux/Auth/authSelectors';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const HomePage = lazy(() =>
  import('./Page/HomePage/HomePage' /*webpackChunkName: "HomePage"*/),
);
const Login = lazy(() =>
  import('./Page/Login/Login' /*webpackChunkName: "Login"*/),
);
const Register = lazy(() =>
  import('./Page/Register/Register' /*webpackChunkName: "Register"*/),
);
const BestHotels = lazy(() =>
  import(
    './Page/BestHotels/BestHotels' /*webpackChunkName: "BestHotels"*/
  ),
);
const MyCabinet = lazy(() =>
  import(
    './Page/MyCabinet/MyCabinet' /*webpackChunkName: "MyCabinet"*/
  ),
);
const Team = lazy(() =>
  import('./Page/Team/Team' /*webpackChunkName: "Team"*/),
);
const Apartments = lazy(() =>
  import(
    './Page/Apartments/Apartments' /*webpackChunkName: "Apartments"*/
  ),
);
const ApartmentsDetals = lazy(() =>
  import(
    './Page/ApartmentsDetals/ApartmentsDetals' /*webpackChunkName: "ApartmentsDetals"*/
  ),
);

const App = ({ onRefresh }) => {
   const dispatch = useDispatch();
  const isLogin = useSelector(getIsAutheticated);

   useEffect(() => {
     dispatch(getCurrentUser());
   }, [dispatch, onRefresh]);

  return (
    <>
      <header className={s.header}>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={ <Loader className={s.suspenseMessage}          
         type="Audio" color="#FFF" height={80} width={80}
      />}>
          <Switch>
            <PublicRoute
              exact
              path="/"
              restricted
              redirectTo="/apartments"
              component={HomePage}
            /> 
            <Route path="/team" component={Team} />
            <PrivateRoute
              path="/apartments/:id"
              component={ApartmentsDetals}
              redirectTo="/"
            />
            <PrivateRoute
              path="/apartments"
              component={Apartments}
              redirectTo="/"
            />
            <PrivateRoute
              path="/bestHotels"
              component={BestHotels}
              redirectTo="/"
            />
            <PrivateRoute
              path="/myCabinet"
              component={MyCabinet}
              redirectTo="/"
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/apartments"
              component={Login}
            />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/apartments"
              component={Register}
            />
            {!isLogin ? (
              <Route component={HomePage} />
            ) : (
              <Route component={Apartments} />
            )}
          </Switch>
        </Suspense>
      </main>
      <footer>
        < Footer />
      </footer>
    </>
  );
};

export default App;
