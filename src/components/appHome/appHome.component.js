import template from './appHome.template'
import styles from './appHome.styles'

import { store } from '../../../store'

import { appTitle } from '../appTitle/appTitle.component'
import { appContent } from '../appContent/appContent.component'

const appHome = () => {

    const state = store.get()

    const children = () => ({
        appTitle,
        appContent
    })

    const methods = () => ({

        htmlEncode(str) {
            if (!str) return ''
            let i = str.length,
                aRet = [];

            while (i--) {
                let iC = str[i].charCodeAt();
                console.log(i, str[i], iC)
                if (iC < 65 || iC > 127 || (iC > 90 && iC < 97)) {
                    aRet[i] = '&#' + iC + ';';
                } else {
                    aRet[i] = str[i];
                }
            }
            return aRet.join('');
        }

    })

    return {
        state,
        template,
        styles,
        children,
        methods
    }
}

export { appHome }