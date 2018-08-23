import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    showSidebar: false,
    sidebarDropdown: "",
    currentPlanShow: false,
    radio: false,
    plans:[
    {"domains": "0", "searchSystems": "20", "keyFrases": "10", "checksPerDay": "10"},
    {"domains": "2", "searchSystems": "0", "keyFrases": "40", "checksPerDay": "2"},
    {"domains": "11", "searchSystems": "2","keyFrases": "0", "checksPerDay": "11"},
    {"domains": "5", "searchSystems": "11","keyFrases": "2", "checksPerDay": "0"}
    ],
    history:[
    {"type": "Plan active", "date": "05.10.2017 13:38", "plan": "Free"},
    {"type": "Plan active", "date": "21.03.2018 08:12", "plan": "Common"},
    {"type": "Plan expired", "date": "17.08.2018 22:04", "plan": "Ultimate"}
    ]
  },
  mutations: {
    toggleSidebar(state){
      state.showSidebar = !state.showSidebar;
    },
    hideSidebar(state){
      state.showSidebar = false;
    },
    sidebarDropdown(state,payload){
      if(state.sidebarDropdown == payload.payload) payload.payload = "";
      state.sidebarDropdown = payload.payload
    },
    currentPlan(state){
      state.currentPlanShow = !state.currentPlanShow; 
    },
    radioChange(state, data){
      state.radio = data.payload;
    }
  },
  getters: {
    showSidebar(state){
      return state.showSidebar
    },
    sidebarDropdown(state){
      return state.sidebarDropdown
    },
    currentPlanShow(state){
      return state.currentPlanShow
    },
    radio(state){
      return state.radio
    },
    plans(state){
      return state.plans
    },
    history(state){
      return state.history
    }
  }
})
