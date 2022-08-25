<template>
  <div>
    home
  </div>
</template>

<script>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { convertStringToDate } from '../helpers/dateFunction';

  export default {
    name: 'Home',

    setup() {
      const state = reactive({
        
      });

      window.scroll(0, 0);

      const router = useRouter();

      //onMounted(() => {
      //  state.today = convertStringToDate(state.today);
      //})

      return {
        state,
        router,
        convertStringToDate
      }
    }
  }
</script>

<style scoped>

</style>