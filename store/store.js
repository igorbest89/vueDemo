import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
plugins: [createPersistedState()],

  state: {
    activeStep: 2,
    billingInfoStep: false
  },

  mutations: {
    CHANGE_ACTIVE_STATE(state, payload){
        state.activeStep = payload
    },
    CHANGE_BILLING_SEP(state, payload){
      state.billingInfoStep = payload
    }
  },

  actions: {
    changeActiveStep(context, payload){
        context.commit('CHANGE_ACTIVE_STATE', payload)
    }
  }
  

})
