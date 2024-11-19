import Titlecard from "@/components/titlecard"
import Link from 'next/link'
import styles from '@/app/page.module.css'

const signuppage: React.FC = () => {
    return (
        <div>
            <title>
                Sign Up
            </title>
            <div>
                <Titlecard></Titlecard>
            </div>
            <div className={styles.vertical_stack}>
                <h1 className={styles.centered_heading}>
                    Create Account
                </h1>
                <form className={styles.vertical_stack}>
                    <input type="text" placeholder="Full Name" required className={styles.form_part}></input>
                    <input type="email" placeholder="Email" required className={styles.form_part}></input>
                    <input type="password" placeholder="Password" required className={styles.form_part}></input>
                    <input type="password" placeholder="Confirm Password" required className={styles.form_part}></input>
                    <div>
                        <input type="checkbox"></input> Admin Access
                    </div>
                    <input type="submit" value="Sign up" className={styles.red_button}></input>
                </form>
                <div>
                    <p className={styles.centered_text}>
                        Already have an account? <Link href="../login" className={styles.link}>Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default signuppage;