import {Outlet, Link} from "react-router-dom";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Grid from "./components/Grid.jsx";

const Layout = () => {
    return (
        <>
            <Header />
            <Navigation />
            
            <Spotlight />
            <Grid />
            <Contact/>
            <p>My footer</p>
        </>
    );
};

export default Layout;