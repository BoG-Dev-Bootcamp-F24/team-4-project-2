'use client'

import { useEffect, useState } from 'react'
import Titlecard from "@/components/titlecard"
import Sidebar from "@/components/sidebar"
import styles from '@/app/page.module.css'
import Usercard from '@/components/usercard'

const adminusers: React.FC = () => {
    const [admin, setAdmin] = useState<string | null>(null);
    const [users, setUsers] = useState<any | null>(null);

    useEffect(() => {
        if (sessionStorage.getItem("admin") != "") {
            const isAdmin = sessionStorage.getItem("admin");
            setAdmin(isAdmin);
        }

        async function fetchUsers() {
            const apiResult = await fetch('/api/admin/users');
            const json = await apiResult.json();
            setUsers(json);
        }

        fetchUsers();
    }, [])

    return (
        <div>
            <title>All Users</title>
            <div>
                <div>
                    <Titlecard />
                </div>
                <div className={styles.horizontalItems}>
                    <Sidebar />
                    <div>
                        {admin ? (
                            <div className={styles.userGrid}>
                                {users?.map((user: any) =>
                                    <Usercard key={user._id} user={user.fullName} admin={user.admin} />
                                )}
                            </div>
                        ) : (
                            <div>
                                No Access
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
};

export default adminusers;