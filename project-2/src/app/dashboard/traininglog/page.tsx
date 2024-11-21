'use client'

import { useEffect, useState } from 'react';
import Titlecard from "@/components/titlecard"
import Sidebar from "@/components/sidebar"
import styles from '@/app/page.module.css'

const traininglogpage: React.FC = () => {
    const [login, setLogin] = useState<string | null>(null);

    useEffect(() => {
        if (sessionStorage.getItem("login")) {
            setLogin(sessionStorage.getItem("login"))
        }
    })

    return (
        <div>
            <title>Training Log</title>
            {login &&
            <div>
                <div>
                    <Titlecard />
                </div>
                <div className={styles.horizontalItems}>
                    <Sidebar />
                </div>
            </div>
            }
        </div>
    )
};

export default traininglogpage;