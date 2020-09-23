import { r9x } from 'r9x_js'

import { appMain } from './src/components/appMain.component'
import {appHome} from './src/components/appHome/appHome.component'
import { appNotFound } from './src/components/appNotFound.component'
import { appStore } from './src/components/appStore/appStore.component'
import { appTutorial } from './src/components/appTutorial/appTutorial.component'

const routes = {
    firstRoute: { hash: '#/', component: appHome },
    defaultRoute: { hash: '#/404', component: appNotFound },
    otherRoutes: [
        { hashExp: /^\#\/$/, component: appHome },
        { hashExp: /^\#\/store$/, component: appStore },
        { hashExp: /^\#\/tutorial$/, component: appTutorial },
    ]
}

const app = r9x()

app.use({
    main: appMain,
    routes,
})

app.init()