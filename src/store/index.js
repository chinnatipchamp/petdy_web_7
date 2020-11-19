import Vue from 'vue'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { VueEditor } from 'vue2-editor'
Vue.use(Vuex)
Vue.use(VueEditor)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

export default new Vuex.Store({
  state: {
    bu: [],
    hospital: [],
    shop: [],
    cafe: [],
    farm: [],
    hotel: [],
    salon: []

  },
  mutations: {
    setHospital (state, profile) {
      state.hospital.push(profile)
    },
    setShop (state, profile) {
      state.shop.push(profile)
    },
    setCafe (state, profile) {
      state.cafe.push(profile)
    },
    setHotel (state, profile) {
      state.hotel.push(profile)
    },
    setFarm (state, profile) {
      state.farm.push(profile)
    },
    setSalon (state, profile) {
      state.salon.push(profile)
    }
  },
  actions: {

    dataHospital (context, data) {
      context.commit('setHospital', data)
    },
    dataShop (context, data) {
      context.commit('setShop', data)
    },
    dataCafe (context, data) {
      context.commit('setCafe', data)
    },
    dataHotel (context, data) {
      context.commit('setHotel', data)
    },
    dataFarm (context, data) {
      context.commit('setFarm', data)
    },
    dataSalon (context, data) {
      context.commit('setSalon', data)
    }
  },
  modules: {
  }
})
