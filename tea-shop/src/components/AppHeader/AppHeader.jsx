import { Link } from "react-router-dom";
import styles from "./AppHeader.module.css";
import logo from "../../images/logo.png";
import Navigation from "../Navigation/Navigation";

function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.image} />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default AppHeader;
