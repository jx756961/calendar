<template>
  <div class="container">
    <error-tip />
    <div v-if="!errorCode">
      <day-card :data="dayData" />
      <day-list :data="dayData" />
    </div>
  </div>
</template>

<script>

import getData from '@/services';
import { onMounted, computed, watch } from 'vue';
import { useStore } from 'vuex';

import DayCard from '@/components/DayPage/Card';
import DayList from '@/components/DayPage/List';
import ErrorTip from '@/components/ErrorTip';

import { getNowDate } from '@/libs/utils';

export default {
  name: 'DayPage',
  components: {
    DayCard,
    DayList,
    ErrorTip
  },
  setup () {
    const store = useStore(),
          state = store.state;

    onMounted(() => {
      getData(store, 'day', getNowDate('day'));
    });

    watch(() => {
      return state.dayData
    }, () => {
      store.commit('setErrorCode', 0);
    });

    return {
      dayData: computed(() => state.dayData),
      errorCode: computed(() => state.errorCode)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>