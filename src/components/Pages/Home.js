import '../Scss/Header.scss'
import '../Scss/HomePage.scss'
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <>
        <header className="izmir">
            <div className="headerBorder"></div>
        </header>
        <div className="homePage">
            <div className="quote">
                <h2 className="quote-heading"><em>The world is a book and those who do not travel read only one page.</em></h2>
                <p> ― St. Augustine</p>
                <div className="line"></div>
           </div>
           <h1>Hello on our Website!</h1>
           <h2 className="heading">Who are people on that photo?</h2>
           <p className="text">
               They are Filip and Ceren! A couple from Turkey and Poland, who enjoy traveling and spending time experiencing many fantastic adventures! If you are interested in their story, visit <Link to="/about">About Us</Link>.
            </p>
            <p className="text">
                They are also trying to teach two of the most difficult languages - Polish and Turkish. If you are interested, please visit <Link to="/study">Learn language</Link>, there are a lot of fun exercises and pictures to make studying so easy!
            </p>
        </div>
        </>
     );
}
 
export default Home;