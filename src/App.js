import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meal />
      </main>
    </Fragment>
  );
}

export default App;
