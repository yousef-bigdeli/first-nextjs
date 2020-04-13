import styles from './styles/Styles404.module.css';

export default function Custom404() {
    return (
        <>
            <div className={styles.container404}>
                <h1 className={styles.h1_404}> 404 </h1>
                <div className={styles.div404}>
                    <h2 className={styles.h2_404}> صفحه مورد نظر یافت نشد.</h2>
                </div>
            </div>
        </>
    );
}
