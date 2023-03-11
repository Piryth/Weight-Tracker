import {useTranslation} from "react-i18next";

export default function HistoryBoard () {

    const {t} = useTranslation();

    return <div>
        <h1>{t('History.title')}</h1>
    </div>
}