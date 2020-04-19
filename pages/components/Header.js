import React from "react";
import styles from "../styles/Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const showToggleMenu = () => {
        setToggleMenu((prevToggleMenu) => !prevToggleMenu);
    };
    return (
        <>
            <div className={styles.header}>
                <div className={`${styles.nav} ${styles.container}`}>
                    {/* site title */}
                    <h1 className={styles.title}>
                        <a href="/">
                            وب سایت <span>Nextjs</span>
                        </a>
                    </h1>

                    {/* search box section */}
                    <form className={styles.searchBox}>
                        <input
                            type="text"
                            name="search"
                            placeholder="چی دوس داری؟"
                            id={styles.searchInput}
                        />
                        <button type="submit">جستجو</button>
                    </form>

                    {/* Toggle menu button */}
                    <div className={styles.navToggleMenu}>
                        <button
                            className={styles.bars}
                            onClick={showToggleMenu}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>

                    {/* login and register buttons on header */}
                    <div className={styles.headerLogin}>
                        <a href="/"> عضویت </a>
                        <a href="/"> ورود </a>
                    </div>
                </div>

                {/* navbar menu section */}
                <div className={styles.menu__container}>
                    <ul className={`${styles.headerMenu} ${styles.container}`}>
                        <li>
                            <a href="/">صفحه اصلی</a>
                        </li>
                        <li>
                            <a href="/">اخبار</a>
                        </li>
                        <li>
                            <a href="/">وبلاگ</a>
                        </li>
                        <li>
                            <a href="/">درباره ما</a>
                        </li>
                        <li>
                            <a href="/">تماس با ما</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* togle menu section */}
            <div
                className={styles.toggleMenu}
                style={toggleMenu ? {display: 'flex'} : {display: 'none'}}
            >
                <ul>
                    <li>
                        {/* toggle menu search box */}
                        <form className={styles.toggle__searchBox}>
                            <input
                                type="text"
                                name="search"
                                placeholder="چی دوس داری؟"
                            />
                        </form>
                    </li>
                    <li>
                        <a href="/">صفحه اصلی</a>
                    </li>
                    <li>
                        <a href="/">اخبار</a>
                    </li>
                    <li>
                        <a href="/">وبلاگ</a>
                    </li>
                    <li>
                        <a href="/">درباره ما</a>
                    </li>
                    <li>
                        <a href="/">تماس با ما</a>
                    </li>
                    <li>
                        <a href="/">ورود</a>
                    </li>
                    <li>
                        <a href="/">عضویت</a>
                    </li>
                </ul>
            </div>
            
            
        </>
    );
};

export default Header;
