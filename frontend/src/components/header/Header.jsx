import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order Your favourite food and medecine here</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          corporis odio, alias quibusdam inventore ea reprehenderit laudantium
          accusantium explicabo quo aut eum maxime commodi, reprehenderit
          laudantium accusantium explicabo quo aut eum maxime commodi,
        </p>
        <Link to="/menu">
          <button>View menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
