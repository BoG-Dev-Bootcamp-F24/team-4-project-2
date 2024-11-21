import { ObjectId } from "mongodb"
import Titlecard from "@/components/titlecard"
import Sidebar from "@/components/sidebar"
import styles from '@/app/page.module.css'

const admintraining: React.FC = () => {
    return (
        <div>
            <title>All Training</title>
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

export default admintraining;