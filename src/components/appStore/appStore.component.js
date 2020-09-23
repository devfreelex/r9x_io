import template from './appStore.template'
import styles from './appStore.styles'

import { appTitle } from '../appTitle/appTitle.component'
import { appView } from '../appView/appView.component'
import { store } from '../../../store'

const appStore = () => {

    const tagName = 'app-store'

    const state = store.get()

    const children = () => ({
        appTitle,
        appView
    })

    return {
        tagName,
        state,
        template,
        styles,
        children
    }
}

export { appStore }