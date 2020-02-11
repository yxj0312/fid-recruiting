import ProductList from './components/views/ProductList'
import About from './components/About'

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: ProductList
        },

        {
            path: '/productList',
            component: ProductList
        },

        {
            path: '/about',
            component: About
        },
    ]
}