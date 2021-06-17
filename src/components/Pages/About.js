import { Link } from "react-router-dom";
const About = () => {
    return ( 
        <>
            <header className="cap">
                <div className="headerBorder"></div>
            </header>
            <div className="page">
            <h1>About us</h1>
            <h2 className="heading">Who are we?</h2>
            <p className="text">
                We are Filip and Ceren. A Polish-Turkish couple with passion for travelling, get to know new languages, and enjoy together every moment in this great world!
            </p>
            <p className="text">
                We started our adventure on July 2, 2020, when Filip came to Turkey. In one week we visited Istanbul, Ankara and Cappadocia. Soon, we will tell more about that trip, so stay tuned on our website.
            </p>
            <p className="text">
                One of our goal as a couple is to show people, that two of the most difficult languages, are not as hard as they seem. Of course we are talking about Polish and Turkish. Learning new language is always hard and requires serious time, goal setting and follow through. That's why we recommend our website, where you can learn new words with pictures, and study grammar with lots of example, which will help you understand the rules of specific langauge. Visit <Link to = "/study">Learn language</Link> page
            </p>

            <h1>About Filip</h1>
            <p className="text">
                Filip is junior frontend developer, who created this website (He had to show it off :D). In every free moment he likes to spend time on code and learn new things. Keep your fingers crossed for him to get his first job in this field ^^
            </p>
            <p className="text">
                He is also interested in historical reenactment, and belongs to the Wesoła Kompania group, love traveling, playing guitar and boardgames. For some time, he has been trying at being a Game Master of role-playing games. Are you interested? It's one of the best ways to improve your English. Ask Ceren, cause our greatest challange was when we played with her friend who didn't speak English. Imagine, she had to translate everything I was saying, into Turkish, and her answers from Turkish to English. That's my girl! :D
            </p>
            </div>
        </>
     );
}
 
export default About;