<template>
  <div class="error-tip" v-if="errorCode">
    <img :src="require('../../assets/img/error.png')" />
    <p>{{ errorData[errorCode] }}</p>
  </div>
</template>

<script>

import errorData from '@/data/error';

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'ErrorTip',
  setup () {
    const store = useStore();

    return {
      errorCode: computed(() => store.state.errorCode),
      errorData
    }
  }
}
</script>

<style lang="scss" scoped>
  .error-tip {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;

    img {
      width: .5rem;
    }

    p {
      margin-top: .15rem;
      font-size: .14rem;
      color: #999;
    }
  }
</style>