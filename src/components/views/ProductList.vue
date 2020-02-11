<template>
  <layout name="LayoutDefault">
    <div class="Home">
      <h1>
        Product List
      </h1>
      <div v-for="(product, index) in products" :key="index">  
        <div v-for="(image, index) in product.images" :key="'image'+index">
          <img :src=image alt="" v-if="image">
          <div v-else>Loading...</div> 
        </div>
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