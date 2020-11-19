import Vue from 'vue'
import VueRouter from 'vue-router'

import pagecat from '../views/Community/PetBreed/pagecat.vue'
import pagedog from '../views/Community/PetBreed/pagedog.vue'

import profileblog from '../views/Community/Profile/profileblog.vue'
import profilecat from '../views/Community/Profile/profilecat.vue'
import profiledog from '../views/Community/Profile/profiledog.vue'
import profilepetlost from '../views/Community/Profile/profilepetlost.vue'
import profilefindhome from '../views/Community/Profile/profilefindhome.vue'

import test from '../views/Community/Profile/test.vue'

import pageFindhome from '../views/Community/Page/pageFindhome.vue'
import pageBlog from '../views/Community/Page/pageBlog.vue'
import pageBlogDog from '../views/Community/Page/pageBlogDog.vue'
import pageBlogCat from '../views/Community/Page/pageBlogCat.vue'
import pagePetBreed from '../views/Community/Page/pagePetBreed.vue'
import pagePetlost from '../views/Community/Page/pagePetlost.vue'
import community from '../views/Community/community.vue'

import pageDonate from '../views/Community/Page/pageDonate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/community'
  },
  {
    path: '/community',
    name: 'community',
    component: community,
    children: [
      {
        path: 'pageBlogDog',
        name: 'pageBlogDog',
        props: true,
        component: pageBlogDog
      },
      {
        path: 'pageBlogCat',
        name: 'pageBlogCat',
        props: true,
        component: pageBlogCat
      },
      {
        path: 'Petlost',
        name: 'pagePetlost',
        props: true,
        component: pagePetlost
      },
      {
        path: 'Findhome',
        name: 'pageFindhome',
        props: true,
        component: pageFindhome
      },
      {
        path: 'Blog',
        name: 'pageBlog',
        props: true,
        component: pageBlog
      },
      {
        path: 'Donate',
        name: 'pageDonate',
        props: true,
        component: pageDonate
      }
    ]
  },

  {
    path: '/test',
    name: 'test',
    props: true,
    component: test
  },
  {
    path: '/profilepetlost',
    name: 'profilepetlost',
    props: true,
    component: profilepetlost
  },
  {
    path: '/profilefindhome',
    name: 'profilefindhome',
    props: true,
    component: profilefindhome
  },
  {
    path: '/profilecat',
    name: 'profilecat',
    props: true,
    component: profilecat
  },
  {
    path: '/profileblog',
    name: 'profileblog',
    props: true,
    component: profileblog
  },
  {
    path: '/profiledog',
    name: 'profiledog',
    props: true,
    component: profiledog
  },
  {
    path: '/pagePetBreed',
    name: 'pagePetBreed',
    props: true,
    component: pagePetBreed,
    children: [
      {
        path: '/pagecat',
        name: 'pagecat',
        component: pagecat
      },
      {
        path: '/pagedog',
        name: 'pagedog',
        component: pagedog
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
