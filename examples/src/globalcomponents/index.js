/* Automatically generated by './build/bin/build-entry.js' */
import MapInit from './map_init/index.js'
import MutiPop from './muti_popup/index.js'

const components = [
  MapInit,
  MutiPop
]

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return

  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  install,
  MapInit,
  MutiPop
}
