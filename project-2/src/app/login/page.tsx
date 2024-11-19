import Titlecard from "@/components/titlecard"
import Link from 'next/link'
import styles from '@/app/page.module.css'

const loginpage: React.FC = () => {
    return (
        <div>
            <title>Login</title>
            <div>
                <Titlecard></Titlecard>
            </div>
            <div className={styles.vertical_stack}>
                <h1 className={styles.centered_heading}>
                    Login
                </h1>
                <form className={styles.vertical_stack}>
                    <input type="email" placeholder="Email" required className={styles.form_part}></input>
                    <input type="password" placeholder="Password" required className={styles.form_part}></input>
                    <input type="submit" value="Log in" required className={styles.red_button}></input>
                </form>
                <div>
                    <p className={styles.centered_text}>
                        Don't have an account? <Link href="/login/signup" className={styles.link}>Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default loginpage;