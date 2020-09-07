import React from 'react';
import Template from './components/Template';
import styles from './styles/Register.module.scss';

function Login(){
    return(
        <>
            <Template>
                <div className={styles.reg__container}>
                    <div className={styles.title}>ورود به سایت</div>
                    <div>
                        <form className={styles.register__form}>
                            <input type="text" name="username" placeholder="نام کاربری"/>
                            <input type="password" name="password" placeholder="رمز عبور"/>
                            <div class={styles.remember__check}>
                                <input type="checkbox" name="remember" id="remember" value="remember"/>
                                <label htmlFor="remember">مرا بخاطر بسپار</label>
                            </div>
                            <input type="submit" name="submit-register" value="ورود"/>
                        </form>
                    </div>
                </div>
            </Template>
        </>
    )
}

export default Login;