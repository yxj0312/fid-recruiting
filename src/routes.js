import Home from './components/views/Home'
import About from './components/About'

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: Home
        },

        {
            path: '/productList',
            component: Home
        },

        {
            path: '/about',
            component: About
        },
    ]
}