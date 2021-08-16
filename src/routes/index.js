import Welcome from '../pages/Welcome';
import Products from '../pages/Product'
import Collection from '../pages/Collection'
import Product from '../pages/Product/product'
const authProtectedRoutes = [
	{ path: '/', component: Products },
	{ path: '/fuck', component: Products},
	{ path: '/collection/:handle', component: Collection },
	{ path: '/product/:handle', component: Product }
];

export { authProtectedRoutes };