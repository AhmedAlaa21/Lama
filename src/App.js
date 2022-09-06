import "./App.css";
import Home from "./pages/Home.jsx";
import ProductsList from "./pages/ProductsList";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Route, Switch } from "react-router-dom";

//TODO Routing between pages & add redux cart
//TODO Add Firebase to the project to handle Login System.

function App() {
  return (
    // <Switch>
    //   <Route path="/" exact>
    //     <Home />
    //   </Route>
    //   <Route path="/products-page" >
    //     <ProductPage />
    //   </Route>
    //   <Route path="/products-list" >
    //     <ProductsList />
    //   </Route>
    //   <Route path="/register" >
    //     <Register />
    //   </Route>
    //   <Route path="/login" >
    //     <Login />
    //   </Route>
    //   <Route path="/cart">
    //     <Cart />
    //   </Route>
    // </Switch>
    <div className="App">
      {/* <Home/> */}
      {/* <ProductsList /> */}
      {/* <ProductPage /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Cart />
    </div>
  );
}

export default App;
