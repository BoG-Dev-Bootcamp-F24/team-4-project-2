'use client'

import { useEffect, useState } from 'react'
import Titlecard from "@/components/titlecard"
import Sidebar from "@/components/sidebar"
import styles from '@/app/page.module.css'
import Animalcard from "@/components/animalcard"

const adminanimals: React.FC = () => {
    const [admin, setAdmin] = useState<string | null>(null);
    const [animals, setAnimals] = useState<any | null>(null);

    useEffect(() => {
        if (sessionStorage.getItem("admin") != "") {
            const isAdmin = sessionStorage.getItem("admin");
            setAdmin(isAdmin);
        }

        async function fetchAnimals() {
            const apiResult = await fetch('/api/admin/animals');
            const json = await apiResult.json();
            setAnimals(json);
        }

        fetchAnimals();
    }, [])

    return (
        <div>
            <title>All Animals</title>
            <div>
                <div>
                    <Titlecard />
                </div>
                <div className={styles.horizontalItems}>
                    <Sidebar />
                    <div>
                        {admin ? (
                            <div className={styles.userGrid}>
                                {animals?.map((animal: any) =>
                                    <Animalcard key={animal._id} name={animal.name} breed={animal.breed} owner={animal.owner} hoursTrained={animal.hoursTrained} profilePicture={""} />
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

export default adminanimals;