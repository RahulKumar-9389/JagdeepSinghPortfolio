import { Helmet } from "react-helmet";
import Header from '../components/Header';
import Footer from '../components/Footer';


const Layout = ({ children, title }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="portfolio" />
                <meta name="keywords" content="portfolio, react, software engineer" />
                <meta name="author" content="JagdeepSingh" />
                <title>{title ? `JagdeepSingh | ${title}` : 'JagdeepSingh'}</title>
            </Helmet>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};



export default Layout;