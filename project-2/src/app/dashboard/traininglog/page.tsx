import Titlecard from "@/components/titlecard"
import Sidebar from "@/components/sidebar"
import styles from '@/app/page.module.css'

const traininglogpage: React.FC = () => {
    return (
        <div>
            <title>Training Log</title>
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

export default traininglogpage;