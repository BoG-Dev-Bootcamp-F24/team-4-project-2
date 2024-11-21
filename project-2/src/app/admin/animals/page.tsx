import { ObjectId } from 'mongodb'
import Titlecard from "@/components/titlecard"
import Sidebar from "@/components/sidebar"
import styles from '@/app/page.module.css'

interface Animal {
    _id: ObjectId;
    name: string;
    breed: string;
    owner: ObjectId;
    hoursTrained: number;
    profilePicture: string;
}

const adminanimals: React.FC = () => {
    return (
        <div>
            <title>All Animals</title>
            <div>
                <div>
                    <Titlecard />
                </div>
                <div>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
};

export default adminanimals;