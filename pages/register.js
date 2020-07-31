import React from 'react';
import Template from './components/Template.js';
import styles from './styles/Register.module.scss';

function Register() {
    return (
        <>
            <Template>
                <div className={styles.reg__container}>
                    <div className={styles.title}>فرم عضویت</div>
                    <div>
                        <form className={styles.register__form}>
                            <input type="text" name="username" placeholder="نام کاربری خود را وارد کنید"/>
                            <input type="email" name="email" placeholder="ایمیل خود را وارد کنید"/>
                            <input type="text" name="mobile" placeholder="شماره موبایل خود را وارد کنید"/>
                            <input type="password" name="password" placeholder="رمز عبور خود را وارد کنید"/>
                            <input type="password" name="confirmpass" placeholder="رمز عبور خود را مجدد وارد کنید"/>
                            <input type="submit" name="submit-register" value="عضویت"/>
                        </form>
                    </div>
                </div>
            </Template>
        </>
    );
}

export default Register;
