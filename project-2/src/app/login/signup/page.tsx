'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ObjectId } from "mongodb";
import Titlecard from "@/components/titlecard"
import Link from 'next/link'
import styles from '@/app/page.module.css'

interface User {
    _id: ObjectId;
    fullName: string;
    email: string;
    password: string;
    admin: boolean;
}

const signuppage: React.FC = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        try {
            router.push('/dashboard/animals')
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