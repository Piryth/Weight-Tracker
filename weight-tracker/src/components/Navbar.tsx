import { Link } from "react-router-dom";
import './../styles/components/Navbar.scss'
import {useTranslation} from "react-i18next";
import i18n from  'i18next';
import '../config/i18n.js'

export default function NavBar() {

    const {t} = useTranslation();

    //We use an array to define the languages available in the select menu of the navbar
    const lngs = [
        //To add a new language, add reference here
        {code: "fr", native: "Francais"},
        {code: "en", native: "Anglais"}
    ]

    const handleSelect = (languageCode: string) => {
        i18n.changeLanguage(languageCode);
        console.log("Language set to " + languageCode);
    }

    return <nav id="navbar">
        <Link className="navbar-link" to="/">{t('Dashboard.nav')}</Link>
        <Link className="navbar-link" to="/goals">{t('Goals.nav')}</Link>
        <Link className="navbar-link" to="/history">{t('History.nav')}</Link>
        <Link className="navbar-link" to="/profile">{t('Profile.nav')}</Link>
        <select className="navbar-select" name="lng" onChange={(event) => {

            let code: string = event.target.options[event.target.selectedIndex].getAttribute('data-code')!;
            handleSelect(code)
        }}>
            {
                lngs.map(language => {

                    return <option key={language.code} data-code={language.code}>
                        {language.native}
                    </option>
                })
            }

        </select>
    </nav>
}