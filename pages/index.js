import React from 'react';
import Template from './components/Template';
import Slider from './components/Slider';
import styles from './styles/Index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

//home page on site
function Index() {
    return (
        <>
            <Template>
                {/* Slider component*/}
                <Slider />
                {/* articles */}
                <div className={styles.container}>
                    <div className={styles.articlesHead}>
                        <div className={styles.title}>آخرین مقالات</div>
                        <div>
                            <a href="/">مشاهده همه مقالات</a>
                        </div>
                    </div>
                    <div className={styles.articles}>
                        {/* article box section */}
                        <div className={styles.article}>
                            <article>
                                <div className={styles.articleImage}>
                                    <a href="/">
                                        <img src="/assets/images/banner1.jpg" />
                                    </a>
                                </div>
                                <div className={styles.articleContent}>
                                    <div className={styles.subject}>
                                        {/* article subject */}
                                        <a href="/">موضوع</a>
                                    </div>
                                    <div className={styles.title}>
                                        {/* article title */}
                                        <a href="/">تیتر مقاله</a>
                                    </div>
                                    <div className={styles.tags}>
                                        {/* tags */}
                                        <a href="/">#تگ</a>
                                    </div>
                                </div>
                                <footer>
                                    {/* likes number value */}
                                    <div>130</div>
                                    <div className={styles.likes}>
                                        {/* likes icon */}
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                    {/* views number value */}
                                    <div>135</div>
                                    <div className={styles.view}>
                                        {/* views icon */}
                                        <FontAwesomeIcon icon={faEye} />
                                    </div>
                                </footer>
                            </article>
                        </div>

                    </div>
                </div>

                {/*  */}

                
            </Template>
        </>
    );
}

export default Index;
