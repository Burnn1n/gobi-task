import Welcome from '../pages/Welcome';
import Products from '../pages/Product'
import Collection from '../pages/Collection'
import Product from '../pages/Product/product'
import Cart from '../pages/Cart/index'
import Checkout from '../pages/Checkout/index'
import Payment from '../pages/Checkout/payment'
const authProtectedRoutes = [
	{ path: '/', component: Products },
	{ path: '/fuck', component: Products},
	{ path: '/collection/:handle', component: Collection },
	{ path: '/product/:handle', component: Product },
	{ path: '/cart', component: Cart },
	{ path: '/checkout', component: Checkout },
	{ path: '/checkout/payment', component: Payment }
];

export { authProtectedRoutes };