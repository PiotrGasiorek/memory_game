import { Link } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";

export const Navbar = () => {
  return (
    <nav className="nav">
      <Link className="nav__logo" to={"/"}>
        <img className="nav__logo__img" src={Logo} alt="Go to homepage" />
      </Link>
      <Button variant="outlined" size="md" color="ghost" to="/dashboard">
        Games Statistics
      </Button>
    </nav>
  );
};
