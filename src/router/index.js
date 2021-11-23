import { createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import Product from '../views/Product.vue'
import Search from '../views/Search.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import MyAccount from '../views/MyAccount.vue'
import { storeKey } from 'vuex'
import store from '../store'
import BuyCheckout from '../views/BuyCheckout.vue'
import RentCheckout from '../views/RentCheckout.vue'
import Success from '../views/Success.vue'
import Category from '../views/Category.vue'
import SuccessEnquiry from '../views/SuccessEnquiry.vue'
import Enquiry from '../views/Enquiry.vue'
import PaymentOptions from '../views/PaymentOptions.vue'
import FAQ from '../views/FAQ.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/payment-options',
    name: 'PaymentOptions',
    component: PaymentOptions
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
  {
    path: '/books/',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/register',
    name: 'Signup',
    component: Signup

  },
  {
    path: '/enquiry',
    name: 'Enquiry',
    component: Enquiry

  },
  {
    path: '/success-enquiry',
    name: 'SuccessEnquiry',
    component: SuccessEnquiry

  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
      requireLogin: true
    }

  },
  {
    path: '/login',
    name: 'Login',
    component: Login

  },
  {
    path: '/:category_slug/:book_slug',
    name: 'Product',
    component: Product
  },
  {
    path: '/:category_slug',
    name: 'Category',
    component: Category
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/buy-checkout',
    name: 'BuyCheckout',
    component: BuyCheckout,
    meta: {
      requireLogin: true
  }
  },
  {
    path: '/rent-checkout',
    name: 'RentCheckout',
    component: RentCheckout,
    meta: {
      requireLogin: true
  }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'Login', query: { to: to.path } });
  } else {
    next()
  }
})

export default router
