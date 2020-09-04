
import {appHeader} from './appHeader/appHeader.component'

const appMain = () => {

    const children = () => ({
        appHeader
    })

    const template = ({state, props}) => {
        return /*html*/`
            <div class="app-main-wrapper">
                <app-header></app-header>
                <router-view></router-view>
            </div>
        `
    }

    const styles = () => {
        return /*css*/`

           app-main {
            display: block;
            float: left;
            width: 100%;               
           }
        `
    }

    const hooks = ({state}) => ({
        afterOnInit () {

        }
    })

    return {
        template,
        styles,
        hooks,
        children
    }
}

export { appMain }