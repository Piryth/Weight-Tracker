import '../styles/pages/DashBoard.scss'
import {useTranslation} from "react-i18next";


export default function DashBoard() {

    const {t} = useTranslation();

    return <div>
        <h1>{t('Dashboard.title')}</h1>
    </div>
}
