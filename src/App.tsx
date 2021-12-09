import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { getAllCategory } from "./services/category";
import { getAllProducts } from "./services/product";
import { useDispatch } from "react-redux";
import { setCategoryAction } from "./features/category";
import { setProductsAction } from "./features/product";
import NavBar from "./components/nav/NavBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { allRoutes } from "./routes";
import LoadingProgress from "./components/loadingProgress";

function App() {
  const dispatch = useDispatch();
  const [areAllDataLoaded, setAreAllDataLoaded] = useState<boolean>(false);

  const loadAllData = async () => {
    try {
      const categoryData: string[] = await getAllCategory();
      const productData = await getAllProducts();
      dispatch(setCategoryAction([...categoryData, "all product"]));
      dispatch(setProductsAction(productData));
      setAreAllDataLoaded(true);
    } catch {}
  };

  useEffect(() => {
    loadAllData();
  }, []);

  if (!areAllDataLoaded) {
    return (
      <>
        <NavBar />
        <LoadingProgress />
      </>
    );
  }

  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            {allRoutes.map((data, index) => (
              <Route path={data.path} exact={data.exact}>
                <data.component />
              </Route>
            ))}
          </Switch>
        </div>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
