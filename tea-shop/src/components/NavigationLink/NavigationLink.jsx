import { NavLink } from 'react-router-dom';
import styles from './NavigationLink.module.css';
import React from "react";

const NavigationLink=({  text, path })=> {
    return (
        <span className={styles.link}>
      <NavLink
          className={styles.linkText}
          to={path}
          exact="true"
      >
        {text}
      </NavLink>
    </span>
    );
}

/*NavigationLink.propTypes = {
    icon: PropTypes.elementType.isRequired,
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};*/

export default NavigationLink;