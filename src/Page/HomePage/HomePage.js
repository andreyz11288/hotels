import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAutheticated } from "../../Redux/Auth/authSelectors";
import s from "./HomePage.module.css";

const HomePage = () => {
  const isLogin = useSelector(getIsAutheticated);
  return (
    <div className={s.div}>
      <h1 className={s.h1}>Most Relaxing Place</h1>
      {!isLogin && (
        <p className={s.p}>
          Пожалуйста &nbsp;
          <NavLink className={s.navLogo} to='/login'>
            авторизируйтесь
          </NavLink>
          &nbsp; или &nbsp;
          <NavLink className={s.navReg} to='/register'>
            {" "}
            зарегистрируйтесь{" "}
          </NavLink>
          .
        </p>
      )}
    </div>
  );
};

export default HomePage;