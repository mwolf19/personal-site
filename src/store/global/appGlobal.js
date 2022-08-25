import { reactive } from 'vue';

const appGlobal = reactive({
  apiBaseUrl: '',
  appVersion: '1.0.0'
}); 

export { appGlobal };