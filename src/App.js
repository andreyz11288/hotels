import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AppBar from './Components/Loging/AppBar/AppBar';
import { getCurrentUser } from './Redux/Auth/authOperation';
import PrivateRoute from './Components/Loging/PrivateRoute';
import PublicRoute from './Components/Loging/PublicRoute';
import s from './App.module.scss';

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
  import('./Page/Team/Team' /*webpackChunkName: "MyCabinet"*/),
);

const App = ({ onRefresh }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, onRefresh]);

  return (
    <>
      <header>
        <div className={s.main}></div>
        <div className={s.overley}></div>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={<h1>Lodding...</h1>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/team" component={Team} />
            <PrivateRoute
              path="/bestHotels"
              component={BestHotels}
              redirectTo="/login"
            />
            <PrivateRoute
              path="/myCabinet"
              component={MyCabinet}
              redirectTo="/login"
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/"
              component={Login}
            />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/"
              component={Register}
            />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </main>
    </>
  );
};

export default App;
