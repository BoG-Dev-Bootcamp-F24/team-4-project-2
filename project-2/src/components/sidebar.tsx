'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '@/app/page.module.css'
import Usercard from './usercard'

const sidebar = () => {
    const [page, setPage] = useState<string | null>("training");
    const [admin, setAdmin] = useState<string | null>(null);
    const [user, setUser] = useState<string | null>("User");
    const router = useRouter();

    useEffect(() => {
        if (sessionStorage.getItem("currentPage") != null) {
            const currPage = sessionStorage.getItem("currentPage")
            setPage(currPage);
        }

        if (sessionStorage.getItem("admin") != "") {
            const isAdmin = sessionStorage.getItem("admin");
            setAdmin(isAdmin);
        }

        if (sessionStorage.getItem("name") != null) {
            const theName = sessionStorage.getItem("name")
            setUser(theName);
        }
    })

    const goToTrainingLogs = () => {
        sessionStorage.setItem("currentPage", "training")
        router.push('/dashboard/traininglog');
    }

    const goToAnimals = () => {
        sessionStorage.setItem("currentPage", "animal")
        router.push('/dashboard/animals')
    }

    const gotToAllTraining = () => {
        sessionStorage.setItem("currentPage", "trainings")
        router.push('/admin/training')
    }

    const gotToAllAnimals = () => {
        sessionStorage.setItem("currentPage", "animals")
        router.push('/admin/animals')
    }

    const goToUsers = () => {
        sessionStorage.setItem("currentPage", "users")
        router.push('/admin/users')
    }
    
    const trainingBtn = page != 'training' ? styles.sidebtn : styles.sidebtnclicked;
    const animalBtn = page != 'animal' ? styles.sidebtn : styles.sidebtnclicked;
    const allTrainingBtn = page != 'trainings' ? styles.sidebtn : styles.sidebtnclicked;
    const animalsBtn = page != 'animals' ? styles.sidebtn : styles.sidebtnclicked;
    const usersBtn = page != 'users' ? styles.sidebtn : styles.sidebtnclicked;

    return (
        <div id={styles.sidebar}>
            <div>
                <button onClick={goToTrainingLogs} className={trainingBtn}>Training logs</button>
                <button onClick={goToAnimals} className={animalBtn}>Animals</button>
                <hr id={styles.sideLine} />
                {admin &&
                    <div>
                        <h5>Admin Access</h5>
                        <button onClick={gotToAllTraining} className={allTrainingBtn}>All Training</button>
                        <button onClick={gotToAllAnimals} className={animalsBtn}>All Animals</button>
                        <button onClick={goToUsers} className={usersBtn}>All Users</button>
                    </div>
                }
            </div>
            <div>
                <Usercard user={user} admin={admin} />
            </div>
        </div>
    )
}

export default sidebar;