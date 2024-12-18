import { motion } from 'framer-motion';


const Skill = ({ title, x, y }) => {
    return <>
        <motion.div
            className='skill'
            style={{ position: "absolute", padding: "10px 15px", borderRadius: "20px" }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.05 }}
            whileHover={{ scale: 1.05 }}
        >
            {title}
        </motion.div>
    </>
};


const Skills = () => {
    return <>
        <section id="skills">

            <h1>Skills</h1>

            <div className="skills_container">
                <div className="skills_container">
                    <motion.div
                        className="skill"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1 }}
                    >
                        Web
                    </motion.div>
                    <Skill title="CSS" x="0vw" y="-15vw" />
                    <Skill title="HTML" x="0vw" y="15vw" />
                    <Skill title="JavaScript" x="-20vw" y="0vw" />
                    <Skill title="React" x="20vw" y="0vw" />
                    <Skill title="Node.js" x="-20vw" y="-15vw" />
                    <Skill title="Express" x="20vw" y="15vw" />
                    <Skill title="MongoDB" x="-20vw" y="16vw" />
                    <Skill title="MySQL" x="20vw" y="-16vw" />
                    <Skill title="Bootstrap" x="40vw" y="0vw" />
                    <Skill title="PHP" x="-42vw" y="0vw" />
                    <Skill title="Laravel" x="-30vw" y="10vw" />
                    <Skill title="CodeIgniter 3" x="30vw" y="10vw" />
                </div>
            </div>


        </section>
    </>
};

export default Skills;