import { toast } from "react-toastify";
import "../App.scss";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import useClickOutSide from "../utils/customHook/useClickOutSide";
import { useDispatch, useSelector } from "react-redux";
import { handleGetUser } from "../store/user/handleUser";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import SuspenseFallback from "./components/Commom/SuspenseFallback";
import Layout from "./components/Layout/Layout";
import Layout2 from "./components/Layout/Layout2";
import { Epath } from "./routes/routerConfig";
import AuthRoute from "./routes/AuthRoute";
import LoginPage from "./pages/AuthPage/LoginPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const TestPage2 = lazy(() => import("./pages/TestPage2"));
const TestPage = lazy(() => import("./pages/TestPage"));

function App() {
  // const handleClick = () => {
  //   toast.success("ok", { autoClose: 1000 });
  // };
  // const [openPopup, setOpenPopup] = useState(false);
  // const ref = useRef(null);
  // const openerRef = useRef(null);
  // const handleOutsideClick = () => {
  //   setOpenPopup(false);
  // };

  // useClickOutSide(openerRef, ref, handleOutsideClick);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(handleGetUser());
  // }, []);

  // const res = useSelector((state) => state.user.dataUser);
  // console.log("🚀 ~ App ~ res:", res);
  return (
    // <div className="App">
    //   <h1
    //     className="text-red-500"
    //     ref={ref}
    //     onClick={() => {
    //       setOpenPopup(!openPopup);
    //     }}
    //   >
    //     ok
    //   </h1>
    //   {openPopup && (
    //     <h2 ref={openerRef} className="App_ok">
    //       h2
    //     </h2>
    //   )}
    // </div>

    // <Suspense fallback={<SuspenseFallback />}>
    //   <RenderRoutes routes={routes} isAuthenticated={true} />
    // </Suspense>

    <Suspense fallback={<SuspenseFallback></SuspenseFallback>}>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path={Epath.homePage} element={<HomePage></HomePage>}></Route>
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
