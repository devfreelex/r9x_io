import template from './appStore.template'
import styles from './appStore.styles'

import { appTitle } from '../appTitle/appTitle.component'

const appStore = () => {

    const children = () => ({
        appTitle
    })

    return {
        template,
        styles,
        children
    }
}

export { appStore }