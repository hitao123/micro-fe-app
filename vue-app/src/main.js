import './public-path';
import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

let instance = null;

function render(props = {}) {
  const { container } = props;

  instance = new Vue({
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}


if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  //props 包含主应用传递的参数  也包括为子应用 创建的节点信息
  console.log(props)
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}
