'use client';

import styles from '@/app/page.module.css'
import { useEffect, useState } from 'react';

const usercard = () => {
    const [user, setUser] = useState<string | null>("User");
    const [admin, setAdmin] = useState<string | null>(null);
    const [initial, setInitial] = useState<string | null>("U");

    useEffect(() => {
        if (sessionStorage.getItem("name") != null) {
            const theName = sessionStorage.getItem("name")
            setUser(theName);

            if (theName) {
                setInitial(theName.charAt(0));
            }
        }

        if (sessionStorage.getItem("admin") != "") {
            const isAdmin = sessionStorage.getItem("admin");
            setAdmin(isAdmin);
        }
    }, []);

    return (
        <div id={styles.usercard}>
            <div id={styles.userCircle}>{initial}</div>
            <div>
                <h4>{user}</h4>
                {admin && <p>Admin</p>}
            </div>
        </div>
    )
}

export default usercard;