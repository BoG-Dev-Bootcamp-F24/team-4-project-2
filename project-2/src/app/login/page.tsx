'use client';

import React from 'react'
import Titlecard from "@/components/titlecard"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from '@/app/page.module.css'

const loginpage: React.FC = () => {
    const router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const email = event.target.elements.emailBox.value;
        const password = event.target.elements.passwordBox.value;

        try {
            const response = await fetch('/api/user/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })

            if (response.ok) {
                sessionStorage.setItem("currentPage", "training")
                sessionStorage.setItem("login", "yes")
                router.push('/dashboard/traininglog')
            }
        } catch (error) {
            console.error(error)
        }
    }

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
                <form onSubmit={handleSubmit} className={styles.vertical_stack}>
                    <input type="email" placeholder="Email" name="emailBox" required className={styles.form_part}></input>
                    <input type="password" placeholder="Password" name="passwordBox" required className={styles.form_part}></input>
                    <input type="submit" value="Log in" required className={styles.red_button}></input>
                </form>
                <div>
                    <p className={styles.centered_text}>
                        Don't have an account? <Link href="/signup" className={styles.link}>Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default loginpage;