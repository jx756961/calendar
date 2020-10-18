<template>
  <div id="app">
    <my-header>{{ headerTitle }}</my-header>
    <search-input
            :placeholder="placeholder"
            :maxlength="maxlength"
    />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <tab />
  </div>
</template>

<script>

    import MyHeader from '@/components/Header';
    import Tab from '@/components/Tab';
    import SearchInput from '@/components/SearchInput';

    import { computed, watch } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    export default {
        name: 'App',
        components: {
            MyHeader,
            SearchInput,
            Tab
        },
        setup () {
            const store = useStore(),
                state = store.state,
                router = useRouter();

            router.push('/');
            store.commit('setPlaceholder', 'day');

            watch(() => {
                return router.currentRoute.value.name;
            }, (value) => {
                store.commit('setHeaderTitle', value);
                store.commit('setPlaceholder', value);
                store.commit('setMaxlength', value);
                store.commit('setField', value);
                store.commit('setErrorCode', 0);
            })

            return computed(() => state).value; // {}
        }
    }

</script>

