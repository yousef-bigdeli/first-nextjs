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
                {/*  */}

                <div className={styles.articlesContainer}>
                    <div className={styles.articlesHead}>
                        <div className={styles.title}>آخرین مقالات</div>
                        <div>
                            <a href="/">مشاهده همه مقالات</a>
                        </div>
                    </div>
                    <div className={styles.articles}>
                      <div className={styles.article}>
                        <article>
                            <div className={styles.articleImage}>
                                <a href="/">
                                    <img src="/assets/images/banner1.jpg" />
                                </a>
                            </div>
                            <div className={styles.articleContent}>
                              <div className={styles.subject}><a href="/">موضوع</a></div>
                              <div className={styles.title}><a href="/">متن مقاله</a></div>
                              <div className={styles.tags}><a href="/">#تگ</a></div>
                            </div>
                            <footer>
                                <FontAwesomeIcon icon={faHeart}/>
                                <FontAwesomeIcon icon={faEye} className={styles.eye}/>
                                <i className="far fa-heart"></i>
                            </footer>
                        </article>
                      </div>
                    </div>
                </div>
            </Template>
        </>
    );
}

export default Index;
