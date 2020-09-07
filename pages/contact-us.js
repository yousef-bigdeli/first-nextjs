import React from 'react';
import Template from './components/Template';
import styles from './styles/Contact.module.scss';

const Contact = () => {
    return (
        <>
            <Template>
                <div className={styles.contact__container}>
                    <div className={styles.form__title}>فرم تماس با ما</div>
                    <div className={styles.contact__form}>
                        <form>
                            <div className={styles.flex__row}>
                                <div className={styles.flex__column}>
                                    <label>نام شما</label>
                                    <input type="text" name="name" />
                                </div>
                                <div className={`${styles.flex__column} ${styles.email}`}>
                                    <label>آدرس ایمیل</label>
                                    <input type="text" name="email" />
                                </div>
                            </div>
                            <div className={styles.flex__column}>
                                <label>متن پیام</label>
                                <textarea placeholder="" rows="10"></textarea>
                            </div>
                            <input type="submit" value="ارسال" />
                        </form>
                    </div>
                </div>
            </Template>
        </>
    );
};

export default Contact;
