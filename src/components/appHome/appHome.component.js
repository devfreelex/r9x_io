import template from './appHome.template'
import styles from './appHome.styles'

import { store } from '../../../store'

import { appTitle } from '../appTitle/appTitle.component'
import { appView } from '../appView/appView.component'

const appHome = () => {

    const state = store.get().introduction

    const children = () => ({
        appTitle,
        appView
    })


    return {
        state,
        template,
        styles,
        children,
    }
}

export { appHome }