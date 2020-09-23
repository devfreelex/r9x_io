import styles from './appMenu.styles'
import template from './appMenu.template'

const appMenu = () => {
    
    const tagName = 'app-menu'

    const state = {
        menuList: [
            {label: 'Introdução', link:'#/'},
            {label: 'Store', link:'#/store'},
            {label: 'Tutorial', link:'#/tutorial'},
            {label: 'Github', link:'#/github'},
        ]
    }

    return {
        tagName,
        state,
        styles,
        template
    }
}

export { appMenu }