import template from './appHome.template'
import styles from './appHome.styles'

import { store } from '../../../store'

import { appTitle } from '../appTitle/appTitle.component'
import { appView } from '../appView/appView.component'

const appHome = () => {

    const tagName = 'app-home'

    const state = store.get().introduction

    const children = () => ({
        appTitle,
        appView
    })


    return {
        tagName,
        state,
        template,
        styles,
        children,
    }
}

export { appHome }