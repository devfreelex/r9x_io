import template from './appView.template'
import styles from './appView.styles'

import { store } from '../../../store'
import { appTitle } from '../appTitle/appTitle.component'

const appView = () => {

    const state = store.get()

    const children = () => ({
        appTitle,
    })

    const methods = () => ({

        htmlEncode(str) {
            if (!str) return ''
            let i = str.length,
                aRet = [];

            while (i--) {
                let iC = str[i].charCodeAt();
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

export { appView }