import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Home = () => {
    return (
      <section id="showcase-section">
        <div className="showcase-contnt">
          <h1>Welcome to my Github Repository</h1>
          <p className="showcaseParagraph">
            Here you can create new repositories, view exiting repositories and go
            to my Github Page.
          </p>
        </div>
        <div className="btn-lg">
          <button>Go to Github</button>
          <button>See Repositories</button>
        </div>
        <footer className="footer">
            <div className="footer-Icon">
                <FaFacebookSquare />
                <FaSquareXTwitter />
                <FaGithub />
            </div>
            <div className="copyrightStyle">
                <small>&copy; 2024 Your portfolio. All rights reserved.</small>
            </div>
        </footer>
      </section>
    );
  };
  
  export default Home;
  