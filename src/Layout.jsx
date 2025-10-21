import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";

const Layout = () => {
    return (
                <>
                    <div className="content-box">
                        <Header />
                        <Navigation />
                        <Outlet />
                    </div>
                    <footer>
                        <p>&copy; 2023 SoundScape. All rights reserved.</p>
                    </footer>
                </>
    );
};

export default Layout;