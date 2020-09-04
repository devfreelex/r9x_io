import { r9x } from 'r9x_js'
import { appMain as main } from './src/components/appMain.component'
import {appHome} from './src/components/appHome/appHome.component'
import { appNotFound } from './src/components/appNotFound.component'

const routes = {
    firstRoute: { hash: '#/', component: appHome },
    defaultRoute: { hash: '#/404', component: appNotFound },
    otherRoutes: [
        { hashExp: /^\#\/$/, component: appHome },
    ]
}

const app = r9x()

app.use({
    main,
    routes,
})

app.init()