<template>
  <layout name="LayoutDefault">
    <div class="layout-main">
      <aside class="layout-main__sidebar filter">
        <div class="filter__title">Size</div>
        <div class="filter__area">
          <div class="grid grid--gutters grid--1of4">
            <div class="grid-cell">
              <button class="btn">XS</button>
            </div>
            <div class="grid-cell">
              <button class="btn">S</button>
            </div>
            <div class="grid-cell">
              <button class="btn">M</button>
            </div>
            <div class="grid-cell">
              <button class="btn">L</button>
            </div>
            <div class="grid-cell">
              <button class="btn">XL</button>
            </div>
            <div class="grid-cell">
              <button class="btn">XXL</button>
            </div>
          </div>
        </div>
      </aside>
      <div class="layout-main__content">
        <div class="grid grid--gutters grid--1of4" >
          <product-card :product="product" v-for="(product, index) in products" :key="index"></product-card> 
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import axios from 'axios';
import Layout from '../layouts/Layout';
import ProductCard from './_ProductCard';

export default {
  name: `Home`,
  components: {
    Layout, 
    ProductCard
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

  methods: {
  },
};
</script>