'use client';

import styles from '@/app/page.module.css'
import { useEffect, useState } from 'react';

interface AnimalCardProps {
    name: string | null;
    breed: string | null;
    owner: string | null;
    hoursTrained: number;
    profilePicture: string | null;
}

const AnimalCard = ({ name, breed, owner, hoursTrained, profilePicture }: AnimalCardProps) => {
    const [admin, setAdmin] = useState<string | null>(null);
    const animalName = name ? name : "Dog";
    const theBreed = breed ? breed : "Animal";
    const theOwner = owner ? owner : "User";
    const hours = hoursTrained;
    const initial = name ? name.charAt(0) : "U";
    const picture = "https://cdn.britannica.com/41/233841-050-4FFECCF1/Pomeranian-dog.jpg"


    useEffect(() => {
        if (sessionStorage.getItem("admin") != "") {
            const isAdmin = sessionStorage.getItem("admin");
            setAdmin(isAdmin);
        }

    })
    

    return (
        <div id={styles.animalcard}>
            <div>
                <img src={picture} alt="pic" width="200" height="150"></img>
            </div>
            <div className={styles.horizontalItems}>
                <div id={styles.userCircle}>{initial}</div>
                <div>
                    <h6>{name} - {breed} ({hours} hours)</h6>
                </div>
            </div>
        </div>
    )
}

export default AnimalCard;