import MobileSkills from "../components/MobileSkills";
import Skills from "../components/Skills";
import TransactionEffect from "../components/TransactionEffect";
import Layout from "../layout/Layout";
import { motion } from 'framer-motion';

const About = () => {
    return <>
        <Layout title="About">
            <TransactionEffect />
            <section id="about">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span>Passion Fuels</span><br />
                    <span>Purpose!</span>
                </motion.h1>

                <div className="biography_container">

                    <div className="biography_text_container">
                        <h4>BIOGRAPHY</h4>
                        <p>I am Jagdeep Singh, a dynamic Full Stack Developer with more than six years of experience adept in PHP, Node.js, and an array of front-end technologies, including ReactJS, jQuery, HTML, and CSS. Specializing in CodeIgniter, Laravel, and Express.js MVC, I excel in crafting robust digital solutions. Proficient in Git, SVN, Jira, and skilled in Docker deployment,with Lamp Stack, cloud hosting like aws, digital ocean and hostingar. I am driven by a passion for innovation and collaboration.</p>

                        <p>I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.</p>

                        <p>Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                    </div>

                    <div className="biography_img_container">
                        <img src="/about.jpg" alt="please wait" />
                    </div>

                </div>

                <Skills />
                <MobileSkills />

            </section>
        </Layout>
    </>
};

export default About;