import { checkForInput } from './js/nameChecker'
import {checkForURL} from './js/nameChecker'
import {appendScores, getScores, handleSubmit} from './js/formHandler'
import { handleSubmit2 } from './js/formHandler'
import { onBlur } from './js/formHandler'
import { onFocus } from './js/formHandler'
import {postData} from "./js/formPost";
import {updateUI} from "./js/formPost";
import {updateUI2} from "./js/formPost";
import {createScoreboardTable} from './js/formHandler'
import {appendScores} from './js/formHandler'
import {getScores} from './js/formHandler'

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
    postData,
    updateUI,
    updateUI2,
    createScoreboardTable,
    appendScores,
    getScores
}
//console.log(checkForInput);

