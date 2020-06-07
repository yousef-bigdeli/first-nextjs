import React from 'react';
import styles from '../styles/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [showSearch, setShowSearch] = React.useState(null);
    const [showCloseButton, setShowCloseButton] = React.useState(null);

    // responsive toggle menu for small screens
    const showToggleMenu = () => {
        setToggleMenu((prevToggleMenu) => !prevToggleMenu);
    };

    // show or hide seach box
    const searchButtonHandler = (e) => {
        e.preventDefault();
        if (showSearch === styles.open) {
            searchFormSubmit();
        } else {
            setShowSearch(styles.open);
            setShowCloseButton(styles.show);
        }
    };
    const searchFormSubmit = () => {
        return alert('ok');
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
                    <div className={styles.searchBox}>
                        <div className={styles.formContainer}>
                            <form>
                                <button
                                    type="submit"
                                    onClick={searchButtonHandler}
                                >
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                                <input
                                    type="text"
                                    className={showSearch}
                                    name="search"
                                    placeholder="چی دوس داری؟"
                                    id={styles.searchInput}
                                />
                            </form>
                            <div
                                className={`${styles.closeForm} ${showCloseButton}`}
                                onClick={() => {
                                    setShowSearch(styles.close);
                                    setShowCloseButton(null);
                                }}
                            >
                                <span>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </div>
                        </div>
                    </div>
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
                style={toggleMenu ? { display: 'flex' } : { display: 'none' }}
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
