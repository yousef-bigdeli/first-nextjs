import React from 'react';
import Template from './components/Template';
import Slider from './components/Slider';
import styles from './styles/Index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faComment } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

//home page on site
function Index() {
    const initialNews = [
        {
            image: '/assets/images/banner1.jpg',
            date: ' 1399/03/25 13:45',
            comments: '20',
            title: 'تیتر خبر 1',
        },
        {
            image: '/assets/images/banner2.jpg',
            date: ' 1399/03/25 13:45',
            comments: '20',
            title: 'تیتر خبر 2',
        },
        {
            image: '/assets/images/banner3.jpg',
            date: ' 1399/03/25 13:45',
            comments: '20',
            title: 'تیتر خبر 3',
        },
        {
            image: '/assets/images/banner2.jpg',
            date: ' 1399/03/25 13:45',
            comments: '20',
            title: 'تیتر خبر 4',
        },
        {
            image: '/assets/images/banner1.jpg',
            date: ' 1399/03/25 13:45',
            comments: '20',
            title: 'تیتر خبر 5',
        },
        {
            image: '/assets/images/banner2.jpg',
            date: ' 1399/03/25 13:45',
            comments: '20',
            title: 'تیتر خبر 6',
        },
        {
            image: '/assets/images/banner3.jpg',
            date: ' 1399/03/25 13:45',
            comments: '20',
            title: 'تیتر خبر 7',
        },
        {
            image: '/assets/images/banner2.jpg',
            date: ' 1399/03/25 13:45',
            comments: '20',
            title: 'تیتر خبر 8',
        },
    ];
    const setInitialNews = () => {
        var a = initialNews.pop();
        var b = [...initialNews];
        b.unshift(a);
        return b;
    }
    const [news, setNews] = React.useState(setInitialNews());
    const [moveRight, setMoveRight] = React.useState(false);
    const right = () => {
        // var a = news.pop();
        // var b = [...news];
        // b.unshift(a);
        // setNews(b);
        setMoveRight(true);
        console.log(moveRight)
    };
    // const left = () => {
    //     var a = news.shift();
    //     var b = [...news];
    //     b.push(a);
    //     setNews(b);
    // };

    React.useEffect(() => {
        
    })

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

                {/* News section */}

                <div className={`${styles.newsContainer} ${styles.container}`}>
                    <div className={styles.header}>آخرین اخبار</div>
                    <div className={styles.triangleBottomright}></div>
                    <div className={styles.news}>
                        {news.map((n, i) => {
                            return (
                                <div className={`${styles.newsBox} ${moveRight ? styles.left :''}`}>
                                    <article>
                                        <div className={styles.newsImage}>
                                            <a href="/">
                                                <img src={n.image}></img>
                                            </a>
                                        </div>
                                        <div className={styles.newsContent}>
                                            <div className={styles.newsDate}>
                                                <span className={styles.date}>
                                                    {n.date}
                                                </span>
                                                <span
                                                    className={styles.comment}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faComment}
                                                    />
                                                    {/* comments number value */}
                                                    <span>{n.comments}</span>
                                                </span>
                                            </div>
                                            {/* news title */}
                                            <div className={styles.newsTitle}>
                                                {n.title}
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.newsFooter}>
                        <div className={styles.footerLine}></div>
                        <div className={styles.carouselButtons}>
                            <span className={styles.right} onClick={right}>
                                &#10094;
                            </span>
                            <span className={styles.left} >&#10095;</span>
                        </div>
                    </div>
                </div>
            </Template>
        </>
    );
}

export default Index;
