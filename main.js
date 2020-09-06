import { r9x } from 'r9x_js'

import { appMain as main } from './src/components/appMain.component'
import {appHome} from './src/components/appHome/appHome.component'
import { appNotFound } from './src/components/appNotFound.component'
import { appStore } from './src/components/appStore/appStore.component'

const routes = {
    firstRoute: { hash: '#/', component: appHome },
    defaultRoute: { hash: '#/404', component: appNotFound },
    otherRoutes: [
        { hashExp: /^\#\/$/, component: appHome },
        { hashExp: /^\#\/store$/, component: appStore },
    ]
}

const app = r9x()

app.use({
    main,
    routes,
})

app.init()