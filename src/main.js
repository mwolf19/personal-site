import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '/node_modules/primeflex/primeflex.min.css'

const app = createApp(App);

app.use(router);

//#region 'filters'
app.config.globalProperties.$filters = {
  currency(value) {
    if (typeof(value) !== 'number') {
        return value;
    }

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    return formatter.format(value);
  },

  dateStringToDisplay(dateString) {
    if (dateString !== undefined) {
      let parts = dateString.split((/[-T]/));

      return parts[1] + '/' + parts[2] + '/' + parts[0];
    }
  },

  militaryToRegularTime(value) {
    if (typeof(value) !== 'string') {
      return value;
    }
  
    let hour = Number(value.slice(0, 2));
    let minute = value.slice(2);
    let period = '';
  
    if (hour > 12) {
      hour -= 12;
      period = 'pm';
      
      if (hour === 0) {
        hour = 12;
        period = 'am';
      }
    } else {
      period = 'am';
    }
  
    return String(hour) + ':' + String(minute) + ' ' + period;
  }
}
//#endregion

app.mount('#app')