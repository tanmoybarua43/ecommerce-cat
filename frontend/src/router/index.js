import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import AddProduct from '@/components/AddProduct.vue';
import UserLogin from '@/components/UserLogin.vue';
import UserRegister from '@/components/UserRegister.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/add-product',
      name: 'AddProduct',
      component: AddProduct
    },
    {
      path: '/login',
      name: 'Login',
      component: UserLogin
    },
    {
      path: '/register',
      name: 'Register',
      component: UserRegister
    }
  ]
});

export default router;
