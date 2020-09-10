import template from './appTutorial.template'
import styles from './appTutorial.styles'

import { appTitle } from '../appTitle/appTitle.component'
import { appView } from '../appView/appView.component'
import { store } from '../../../store'

const appTutorial = () => {

    const state = store.get()

    const children = () => ({
        appTitle,
        appView
    })

    return {
        state,
        template,
        styles,
        children
    }
}

export { appTutorial }