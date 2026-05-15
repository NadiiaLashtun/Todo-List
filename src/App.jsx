import { lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./component/route/PrivateRoute";
import Layout from "./component/layout/Layout";
import NotFoundPage from "./component/pages/NotFound";
import LogIn from "./component/LogIn";

const Home = lazy(() => import("./component/pages/Home"));
const List = lazy(() => import("./component/pages/List"));

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Layout isAuth={isAuth} />}>
        <Route index element={<Home />} />

        <Route
          path="/list"
          element={
            <PrivateRoute isAuth={isAuth}>
              <List />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<LogIn setIsAuth={setIsAuth} />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
    </Routes>
  );
}

export default App;
