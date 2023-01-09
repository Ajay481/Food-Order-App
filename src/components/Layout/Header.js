import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import MealsImage from "../../Assets/Meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.head}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage} alt="Delicious Food" />
      </div>
    </Fragment>
  );
};

export default Header;
