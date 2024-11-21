'use client';

import styles from '@/app/page.module.css'
import { useEffect, useState } from 'react';

interface UsercardProps {
    user: string | null;
    admin: string | null;
}

const usercard = ({ user, admin }: UsercardProps) => {
    const name = user ? user : "User";
    const initial = user ? user.charAt(0) : "U";
    const isAdmin = admin ? "admin" : null;

    return (
        <div id={styles.usercard}>
            <div id={styles.userCircle}>{initial}</div>
            <div>
                <h4>{name}</h4>
                {isAdmin && <p>Admin</p>}
            </div>
        </div>
    )
}

export default usercard;