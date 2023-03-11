import {useTranslation} from "react-i18next";

export default function ProfileBoard () {

    const {t} = useTranslation();

    return <div>
        <h1>{t('Profile.title')}</h1>
    </div>
}