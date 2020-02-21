import ProductList from './components/views/ProductList'
import Statistic from './components/views/Statistic'

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
            path: '/statistics',
            component: Statistic
        },
    ]
}