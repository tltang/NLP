import { checkForInput,checkForURL } from './js/nameChecker'
import {handleSubmit, handleSubmit2} from './js/formHandler'
import { onBlur,onFocus } from './js/formHandler'
import {createLanguageTable, appendLanguage, createCategoryTable, appendCategory} from './js/formHandler'
import {fetchLanguage, fetchCategory} from './js/API'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    checkForInput,
    checkForURL,
    handleSubmit,
    handleSubmit2,
    onBlur,
    onFocus,
    createLanguageTable,
    appendLanguage,
    createCategoryTable,
    appendCategory,
    fetchLanguage,
    fetchCategory
}
//console.log(checkForInput);

