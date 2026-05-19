import { lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./component/route/PrivateRoute";
import Layout from "./component/layout/Layout";
import NotFoundPage from "./component/pages/NotFound";
import LogIn from "./component/LogIn";
import { AuthContext } from "./context/AuthContext";

const Home = lazy(() => import("./component/pages/Home"));
const List = lazy(() => import("./component/pages/List"));

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/list"
            element={
              <PrivateRoute>
                <List />
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<LogIn />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
