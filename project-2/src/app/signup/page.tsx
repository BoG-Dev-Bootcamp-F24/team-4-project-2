'use client';

import React from 'react'
import { useRouter } from 'next/navigation'
import Titlecard from "@/components/titlecard"
import Link from 'next/link'
import styles from '@/app/page.module.css'

const signuppage: React.FC = () => {
    const router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const fullName = event.target.elements.fullNameBox.value;
        const email = event.target.elements.emailBox.value;
        const password = event.target.elements.passwordBox.value;
        const confirmPassword = event.target.elements.confirmPassBox.value;
        const admin = event.target.elements.adminBox.checked;

        try {
            if (password.length > 0 && password == confirmPassword) {
                const response = await fetch('/api/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ fullName, email, password, admin }),
                })

                if (response.ok) {
                    if (admin) {
                        sessionStorage.setItem("admin", "admin");
                    } else {
                        sessionStorage.setItem("admin", "");
                    }

                    sessionStorage.setItem("name", fullName);
                    sessionStorage.setItem("currentPage", "training")
                    router.push('/dashboard/traininglog')
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

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
                <form onSubmit={handleSubmit} className={styles.vertical_stack}>
                    <input type="text" placeholder="Full Name" required className={styles.form_part} name="fullNameBox"></input>
                    <input type="email" placeholder="Email" required className={styles.form_part} name="emailBox"></input>
                    <input type="password" placeholder="Password" required className={styles.form_part} name="passwordBox"></input>
                    <input type="password" placeholder="Confirm Password" required className={styles.form_part} name="confirmPassBox"></input>
                    <div>
                        <input type="checkbox" name="adminBox"></input> Admin Access
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