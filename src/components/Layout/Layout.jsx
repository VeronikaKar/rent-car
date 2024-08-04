import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import s from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header_wrap}>
        <header className={s.header}>
          <h2 className={s.title}>Car Rental</h2>
          <Navigation />
        </header>
      </div>
      <main className={s.main}>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default Layout;
