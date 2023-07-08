import { useState } from 'react'
import { LOCALSTORAGE_KEYS } from '../../models'
import utils from '../../utils'

export function LanguageList() {
    const formfolioLang = localStorage.getItem(LOCALSTORAGE_KEYS.LANG)

    if (!formfolioLang) {
        utils.setFormFolioLanguage()
    }

    const [selectedLang, setSelectedLang] = useState(
        utils.getLanguages().find((lang) => lang === formfolioLang) || 'EN'
    )

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
