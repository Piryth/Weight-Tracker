import {useTranslation} from "react-i18next";

export default function GoalBoard() {

    const {t} = useTranslation();

    return <div>
        <h1>{t('Goals.title')}</h1>
    </div>
}