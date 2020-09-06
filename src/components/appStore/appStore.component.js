import template from './appStore.template'
import styles from './appStore.styles'

import { appTitle } from '../appTitle/appTitle.component'
import { appView } from '../appView/appView.component'
import { store } from '../../../store'

const appStore = () => {

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

export { appStore }