import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#dd4814',
    secondary: '#ffffff',
    accent: '#3F51B5',
    error: '#b71c1c'
  }
})
