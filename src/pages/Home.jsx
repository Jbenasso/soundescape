import Spotlight from "../components/Spotlight.jsx";
import Grid from "../components/Grid.jsx";
import Contact from "../components/Contact.jsx";

const Home = () => {
    return (
        <>
            <Spotlight />
            <Grid />

            <article className="project-card full-width" id="contact">
                <h3>Contact Me</h3>
                <Contact />
            </article>
        </>
    );
};

export default Home;