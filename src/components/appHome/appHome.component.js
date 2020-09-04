import template from './appHome.template'
import styles from './appHome.styles'

import { appTitle } from '../appTitle/appTitle.component'

const appHome = () => {

    // const state = {}

    const children = () => ({
        appTitle
    })

    return {
        template,
        styles,
        children
    }
}

export { appHome }