// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    meta: { requiresAuth: true },
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "HomePage",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/HomePage.vue"),
      },
      {
        path: "/signup",
        name: "CreateAccount",
        meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/CreateAccount.vue"),
      },
      {
        path: "/artist",
        name: "ArtistPage",
        meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/ArtistPage.vue"),
      },
      {
        path: "/nft-page",
        name: "NftPage",
        meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/NftPage.vue"),
      },
      {
        path: "/ranking",
        name: "RankingPage",
        meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/RankingPage.vue"),
      },
      {
        path: "/market-place",
        name: "MarketPlace",
        meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/MarketPlace.vue"),
      },
      {
        path: "/connect-wallet",
        name: "ConnectWallet",
        meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/ConnectWallet.vue"),
      },
      {
        path: "*", redirect: "/"
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});



export default router;
