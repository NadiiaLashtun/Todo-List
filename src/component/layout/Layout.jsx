import { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import { Spinner } from "../Spinner";

const Layout = ({ isAuth }) => {
  return (
    <div className="flex min-h-screen flex-col bg-black/80 bg-[url('/img/bg-hero.jpg')] bg-cover bg-bottom bg-blend-darken">
      <Header isAuth={isAuth} />

      <main className="flex flex-1 items-center justify-center p-20">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
