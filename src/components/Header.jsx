// import { IoClose} from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom';

const Header = () => {

  open = () => document.querySelector(".mobile").style.display = "flex";
  close = () => document.querySelector(".mobile").style.display = "none"

  return (
    <header>
      <h2>
        Dayo<span>Repo</span>
      </h2>
      <nav className="nav-link">
        <ul className="nav-Menu0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Repositories">Repository</Link>
          </li>
          <li>
            <Link>Create-Repository</Link>
          </li>
        </ul>
      </nav>
      <button className="button-btn">Go to Github</button>
      {/* <GiHamburgerMenu className="open-sidebar"  onClick={open}/> */}
      <nav className="mobile">
        {/* <IoClose className="close-sidebar"
          onClick={close}/> */}
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Repositories">Repository</Link>
          </li>
          <li>
            <Link>Create Repository</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
