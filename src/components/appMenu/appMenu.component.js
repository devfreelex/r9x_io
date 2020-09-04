import styles from './appMenu.styles'
import template from './appMenu.template'

const appMenu = () => {

    const state = {
        menuList: [
            {label: 'Apresentação', link:'#/'},
            {label: 'Tutorial', link:'#/tutorial'}
        ]
    }

    return {
        state,
        styles,
        template
    }
}

export { appMenu }