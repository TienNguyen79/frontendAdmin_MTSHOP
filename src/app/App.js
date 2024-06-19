import { toast } from "react-toastify";
import "../App.scss";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import useClickOutSide from "../utils/customHook/useClickOutSide";
import { useDispatch, useSelector } from "react-redux";
import { handleGetCurrentUser, handleGetUser } from "../store/user/handleUser";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import SuspenseFallback from "./components/Commom/SuspenseFallback";
import Layout2 from "./components/Layout/Layout2";
import { Epath } from "./routes/routerConfig";
import AuthRoute from "./routes/AuthRoute";
import { getTokenFromLocalStorage } from "../utils/localStorage";

const TestPage2 = lazy(() => import("./pages/TestPage2"));
const TestPage = lazy(() => import("./pages/TestPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const LoginPage = lazy(() => import("./pages/AuthPage/LoginPage"));
const DashboardPage = lazy(() => import("./pages/Dashboard/DashboardPage"));
const CategoriesPage = lazy(() => import("./pages/Category/CategoriesPage"));
const Layout = lazy(() => import("./components/Layout/Layout"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetCurrentUser());
  }, [getTokenFromLocalStorage()]);

  const { dataCurrentUser } = useSelector((state) => state.user);

  const isAuthenticated = !!(
    dataCurrentUser &&
    Object.keys(dataCurrentUser).length &&
    getTokenFromLocalStorage()
  );
  return (
    <Suspense fallback={<SuspenseFallback></SuspenseFallback>}>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route
            element={
              <AuthRoute auth={true} isAuthenticated={isAuthenticated} />
            }
          >
            <Route
              path={Epath.dashboard}
              element={<DashboardPage></DashboardPage>}
            ></Route>
            <Route
              path={Epath.categories}
              element={<CategoriesPage></CategoriesPage>}
            ></Route>
          </Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Route>

        <Route path={Epath.loginPage} element={<LoginPage></LoginPage>}></Route>

        <Route element={<Layout2 />}>
          <Route path={Epath.testPage} element={<TestPage></TestPage>}></Route>

          <Route element={<AuthRoute auth={true} isAuthenticated={true} />}>
            <Route path={Epath.testPage2} element={<TestPage2 />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
