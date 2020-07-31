import React from 'react';
import styles from '../styles/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [showSearch, setShowSearch] = React.useState({
        class: null,
        isShow: false,
    });
    const [searchValue, setSearchValue] = React.useState('');

    // responsive toggle menu for small screens
    const showToggleMenu = () => {
        setToggleMenu((prevToggleMenu) => !prevToggleMenu);
    };

    // show or hide seach box
    const searchButtonHandler = (e) => {
        e.preventDefault();
        if (showSearch.isShow) {
            searchFormSubmit();
        } else {
            setShowSearch({
                class: styles.open,
                isShow: true,
            });
        }
    };
    const searchFormSubmit = () => {
        return alert('ok');
    };

    //search input value
    const inputChangeHandler = (e) => {
        setSearchValue(e.target.value);
        console.log(searchValue);
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
                        <div
                            className={`${styles.formContainer} ${
                                showSearch.isShow ? styles.border : ''
                            }`}
                        >
                            <form>
                                <button
                                    type="submit"
                                    onClick={searchButtonHandler}
                                    className={showSearch.isShow ? styles.searchButtonHover : ''}
                                >
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                                <input
                                    type="text"
                                    className={showSearch.class}
                                    onChange={inputChangeHandler}
                                    name="search"
                                    placeholder="چی دوس داری؟"
                                    id={styles.searchInput}
                                    value={searchValue}
                                />
                            </form>
                            <div
                                className={`${styles.closeForm} ${
                                    showSearch.isShow ? styles.active : ''
                                }`}
                                onClick={() =>
                                    searchValue === ''
                                        ? setShowSearch({
                                              class: styles.close,
                                              isShow: false,
                                          })
                                        : setSearchValue('')
                                }
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
                        <a href="/register"> عضویت </a>
                        <a href="/"> ورود </a>
                    </div>
                </div>

                {/* navbar menu section */}
                <div className={styles.menu__container}>
                    <ul className={`${styles.headerMenu} ${styles.container}`}>
                        <li>
                            <a href="/" className={styles.menuLinks}>صفحه اصلی</a>
                        </li>
                        <li>
                            <a href="/" className={styles.menuLinks}>اخبار</a>
                        </li>
                        <li>
                            <a href="/" className={styles.menuLinks}>وبلاگ</a>
                        </li>
                        <li>
                            <a href="/" className={styles.menuLinks}>درباره ما</a>
                        </li>
                        <li>
                            <a href="/" className={styles.menuLinks}>تماس با ما</a>
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
