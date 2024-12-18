import TransactionEffect from '../components/TransactionEffect';
import Layout from '../layout/Layout';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Home = () => {
    return <>
        <Layout title="Home">
            <TransactionEffect />

            <section id="home">

                <div className="hero_img_container">
                    <img src="/hero.png" alt="hero" />
                </div>

                <div className="home_text_container">
                    <h1>Full Stack Developer</h1>
                    <h2>With <span>6 years</span> of experience</h2>
                    <a href="mailto:jagdeepsingh@gmail.com"><button>Contact Me <HiOutlineArrowNarrowRight className='connect_icon' /></button></a>
                </div>

            </section>

        </Layout>
    </>
};

export default Home;