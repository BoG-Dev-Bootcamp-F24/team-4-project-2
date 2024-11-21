'use client';

import React, { useState } from 'react'
import Titlecard from "@/components/titlecard"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from '@/app/page.module.css'

const loginpage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        try {
            router.push('/dashboard/traininglog')
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
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className={styles.form_part}></input>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className={styles.form_part}></input>
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