import { r9x } from 'r9x_js'
import { appMain as main } from './components/appMain.component'
import { appHello } from './components/appHello.component'
import { appNotFound } from './components/appNotFound.component'


const routes = {
    firstRoute: { hash: '#/', component: appHello },
    defaultRoute: { hash: '#/404', component: appNotFound },
    otherRoutes: [
        { hashExp: /^\#\/$/, component: appHello },
    ]
}

const app = r9x()

app.use({
    main,
    routes,
})

app.init()