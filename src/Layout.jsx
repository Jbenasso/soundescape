import {Outlet, Link} from "react-router-dom";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";

const Layout = () => {
    return (
        <>
            <Header />
            <Navigation />
            
            <Outlet />

            <p>My footer</p>
        </>
    );
};

export default Layout;