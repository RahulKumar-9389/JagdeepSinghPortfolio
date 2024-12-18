import { motion } from 'framer-motion';

const TransactionEffect = () => {
    return <>
        <motion.div
            className='effect'
            style={{ zIndex: 99, backgroundColor: "gray" }}
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        <motion.div
            className='effect'
            style={{ zIndex: 20, backgroundColor: "skyblue" }}
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
        />

        <motion.div
            className='effect'
            style={{ zIndex: 10, backgroundColor: "yellow" }}
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
        />

    </>
};

export default TransactionEffect;