import template from './appView.template'
import styles from './appView.styles'

import { store } from '../../../store'

import { appTitle } from '../appTitle/appTitle.component'
import { appCode } from '../appCode/appCode.component'

const appView = () => {

    const tagName = 'app-view'

    const state = store.get()

    const children = () => ({
        appTitle,
        appCode
    })

    const methods = () => ({

        htmlEncode(str) {
            const specialChars = {
                '&':'&amp;',
                '<':'&lt;',
                '>':'&gt;',
                '"':'&#34;',
                "'":'&#x27;',
                '`':'&#x96',
                '$':'&#x36',
                '/':'&#x2F;',
            }

            const regexScaper = /[&<>"'`$\/]/g

            const result = ` ${str}`.replace(regexScaper, (match) => specialChars[match])
            console.log(result)
            return result
        }

    })

    return {
        tagName,
        state,
        template,
        styles,
        children,
        methods
    }
}

export { appView }