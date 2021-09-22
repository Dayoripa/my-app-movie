import styles from "./../../scss/bemit.module.scss";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { CgClose, CgMenu } from 'react-icons/cg';

export const Navbar = () => {
    let iconStyles = { color: "white", fontSize: "1.5em" };
    return (
        <Fragment>
            <nav className={styles.nav}>
                <div className={styles.nav__container}>
                    <h3>Search Component</h3>
                    <ul className={styles.nav__links}>
                        <li>
                            <Link to="/" className={styles.nav__list}>Home</Link>
                        </li>
                        <li>
                            <Link to="/popular" className={styles.nav__list}>Popular</Link>
                        </li>
                        <li>
                            <Link to="/rated" className={styles.nav__list}>Top Rated</Link>
                        </li>
                        <li>
                            <Link to="/upcoming" className={styles.nav__list}>Upcoming</Link>
                        </li>
                    </ul>
                    <CgClose
                        size={30}
                        color="white"
                    />

                    <CgMenu
                        size={30}
                    />
                </div>
            </nav>
        </Fragment>
    )

}