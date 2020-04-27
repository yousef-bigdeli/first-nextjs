import React from 'react';
import styles from '../styles/Slider.module.scss';

const images = [
    {
        image: '/assets/images/banner1.jpg',
        title: 'image title 1',
    },
    {
        image: '/assets/images/banner2.jpg',
        title: 'image title 2',
    },
    {
        image: '/assets/images/banner3.jpg',
        title: 'image title 3',
    },
];

const Slider = () => {
    const [imageNum, setImageNum] = React.useState(0);
    const [fade, setFade] = React.useState(true);

    // move between images by the next and previous buttons
    const imageIndex = (n) => {
        let curentIndex = imageNum + n;
        setFade(false);
        if (curentIndex < images.length && curentIndex >= 0) {
            setImageNum(curentIndex);
        } else if (curentIndex < 0) {
            setImageNum(images.length - 1);
        } else {
            setImageNum(0);
        }
    };
    // move between images by dot buttons
    const imageShow = (i) => {
        setFade(false);
        setImageNum(i);
    };
    // slideshow timer
    React.useEffect(() => {
        let intervalId;
        setFade(true);
        intervalId = setInterval(() => {
            imageIndex(1);
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [imageNum]);

    return (
        <>
            <div className={styles.slidshow_container}>
                <div className={`${styles.sdile} ${fade ? styles.fade : ''}`}>
                    <img src={images[imageNum].image} />
                    <div className={styles.slideText}>
                        {images[imageNum].title}
                    </div>
                </div>

                <a className={styles.prev} onClick={() => imageIndex(-1)}>
                    &#10094;
                </a>
                <a className={styles.next} onClick={() => imageIndex(1)}>
                    &#10095;
                </a>
            </div>

            {/* slider dot bullets */}
            <div className={styles.dot__container}>
                {images.map((n, i) => {
                    return i == imageNum ? (
                        <span
                            className={`${styles.dot} ${styles.active}`}
                            onClick={() => imageShow(i)}
                        ></span>
                    ) : (
                        <span
                            className={styles.dot}
                            onClick={() => imageShow(i)}
                        ></span>
                    );
                })}
            </div>
        </>
    );
};

export default Slider;
