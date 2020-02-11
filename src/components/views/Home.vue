<template>
  <layout name="LayoutDefault">
    <div class="Home">
      <h1>Home</h1>
      <div v-for="(product, index) in products" :key="index">
        {{ product.brand }}
        {{ product.description }}
        {{ product.priceO }}
        {{ product.priceR }}
        {{ product.url }}
      </div>
    </div>
  </layout>
</template>

<script>
import axios from 'axios';
import Layout from '../layouts/Layout';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
export default {
  name: `Home`,
  components: {
    Layout,
  },
  data() {
    return {
      products: [],
      message:''
    }
  },
  mounted() {
    axios.get(
      '/fid-recruiting/fid-task-4-ffront-products.json'
    )
    .catch(() => {
        this.products = [];
    })
    .then(({data}) => {
      this.products = data;
    })
  },
};
</script>