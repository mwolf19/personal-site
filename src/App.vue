<template>
  <div>
    <div class="flex justify-content-center">
      <button @click="doRoute('dates')">Dates</button>
    </div>
    
    <router-view/>

    <div class="flex justify-content-center">
      footer
    </div>
  </div>
</template>

<script>
  import { useRouter } from 'vue-router';

  export default {
    name: 'app',

    setup() {
      const router = useRouter();

      doRoute('home');

      function doRoute(whereTo) {
        switch (whereTo) {
          case 'home':
            router.push('/');
            break;

          case 'dates':
            router.push('/dates');
            break;
        }
      }

      return {
        router,
        doRoute
      }
    }
  }
</script>

<style>
  :root {
    --yellow: #F5F749;
    --orange: #FB883B;
    --green: #57D853;
    --blue: #74CEF8;
    --gray: #646464;
    --black: #141414;
  }

  #app {
    font-family: system-ui, sans-serif, "Gill Sans";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    color: var(--black);
  }
</style>