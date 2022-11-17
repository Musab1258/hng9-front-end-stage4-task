import classes from './Page.module.css';
import Nav from '../nav/Nav';
import Main from '../main/Main';
import Footer from '../footer/Footer';


const Page = () => {
    return (
        <div className={`${classes.body}`}>
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}

export default Page;