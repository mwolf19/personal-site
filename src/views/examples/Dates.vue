<template>
  <div>
    <div>
      <input type="date" v-model="state.selectedDate" @change="dateChange"/>
    </div>

    <div v-if="state.displayDate.trim() !== ''">
      {{ $filters.dateStringToDisplay(state.displayDate) }}
    </div>
  </div>
</template>

<script>
  import { reactive } from 'vue';
  import { addDay } from '../../helpers/dateFunction'

  export default {
      name: 'Dates',

    setup() {
      const state = reactive({
        selectedDate: '',
        displayDate: ''
      });

      window.scrollTo(0, 0);

      async function dateChange() {
        state.displayDate = addDay(state.selectedDate, 1);
      }

      return {
        state,
        dateChange
      }
    }
  }
</script>

<style scoped>

</style>