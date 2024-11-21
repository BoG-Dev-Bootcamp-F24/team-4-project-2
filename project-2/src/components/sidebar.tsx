'use client'

import { useRouter } from 'next/navigation';
import styles from '@/app/page.module.css'
import Usercard from './usercard'

const sidebar = () => {
    const router = useRouter();

    const goToTrainingLogs = () => {
        router.push('/dashboard/traininglog');
    }

    const goToAnimals = () => {
        router.push('/dashboard/animals')
    }

    return (
        <div id={styles.sidebar}>
            <div>
                <button onClick={goToTrainingLogs} className={styles.sidebtn}>Training logs</button>
                <button onClick={goToAnimals} className={styles.sidebtn}>Animals</button>
            </div>
            <Usercard />
        </div>
    )
}

export default sidebar;