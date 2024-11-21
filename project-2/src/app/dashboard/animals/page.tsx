import Titlecard from "@/components/titlecard"
import Sidebar from "@/components/sidebar"
import styles from '@/app/page.module.css'

const animalspage: React.FC = () => {
    return (
        <div>
            <title>Animals</title>
            <div>
                <div>
                    <Titlecard />
                </div>
                <div className={styles.horizontalItems}>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
};

export default animalspage;