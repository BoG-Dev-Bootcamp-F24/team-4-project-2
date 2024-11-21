'use client'

import { useEffect, useState } from 'react'
import Titlecard from "@/components/titlecard"
import Sidebar from "@/components/sidebar"
import styles from '@/app/page.module.css'

const admintraining: React.FC = () => {
    const [admin, setAdmin] = useState<string | null>(null);
    useEffect(() => {
        if (sessionStorage.getItem("admin") != "") {
            const isAdmin = sessionStorage.getItem("admin");
            setAdmin(isAdmin);
        }
    })

    return (
        <div>
            <title>All Training</title>
            <div>
                <div>
                    <Titlecard />
                </div>
                <div className={styles.horizontalItems}>
                    <Sidebar />
                    <div>
                        {admin ? (
                            <div>

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

export default admintraining;