// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
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
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/CreateAccount.vue"),
      },
      {
        path: "/artist",
        name: "ArtistPage",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/ArtistPage.vue"),
      },
      {
        path: "/nft-page",
        name: "NftPage",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/NftPage.vue"),
      },
      {
        path: "/ranking",
        name: "RankingPage",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/RankingPage.vue"),
      },
      {
        path: "/market-place",
        name: "MarketPlace",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/MarketPlace.vue"),
      },
      {
        path: "/connect-wallet",
        name: "ConnectWallet",
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
});

export default router;
