import styles from './appHeader.styles'
import template from './appHeader.template'

import { appMenu } from '../appMenu/appMenu.component'
import { appLogo } from '../appLogo/appLogo.component'

const appHeader = () => {

    const children = () => ({
        appMenu,
        appLogo
    })

    return {
        styles,
        template,
        children
    }

}

export { appHeader }