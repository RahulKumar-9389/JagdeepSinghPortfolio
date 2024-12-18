import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaStackOverflow, FaYoutube } from "react-icons/fa";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};
const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Links = () => {
    const navigate = useNavigate();
    const items = ["about", "experience", "projects"];

    return (
        <motion.div className="links" variants={variants}>
            <motion.p
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/`)}
            >
                Home
            </motion.p>
            {items.map((item) => (
                <motion.p
                    key={item}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(`/${item}`)}
                >
                    {item}
                </motion.p>
            ))}

            <div className="social_links">
                <Link to="https://www.linkedin.com/in/jagdeep113/"><FaLinkedin color="#0A66C2" className="linkdin icon" /></Link>
                <Link to="https://www.youtube.com/@jagdeepsingh-dev"><FaGithub color="#181717" className="github icon" /></Link>
                <Link to="https://stackoverflow.com/users/7852003/jagdeep-singh"><FaStackOverflow color=" #F48024" className="stack icon" /></Link>
                <Link to="https://github.com/Jagdeep113"><FaYoutube color="#FF0000" className="youtube icon" /></Link>
            </div>
        </motion.div>
    );
};

export default Links;