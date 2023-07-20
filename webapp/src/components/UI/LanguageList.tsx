import { useContext } from 'react'
import { UserContext } from '../../contexts/userContext'
import { LOCALSTORAGE_KEYS } from '../../models'
import utils from '../../utils'

export function LanguageList() {
    const { selectedLang, setSelectedLang } = useContext(UserContext)

    function changeLang(e: React.ChangeEvent) {
        const target = e.target as HTMLSelectElement

        setSelectedLang(target.value)

        localStorage.setItem(LOCALSTORAGE_KEYS.LANG, target.value)
    }

    return (
        <select name="language" value={selectedLang} onChange={changeLang}>
            {utils.getLanguages().map((lang) => (
                <option key={`lang-${lang}`} value={lang}>
                    {lang.toUpperCase()}
                </option>
            ))}
        </select>
    )
}
