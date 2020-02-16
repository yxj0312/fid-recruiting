<template>
  <layout name="LayoutDefault">
    <div class="layout-main">
      <aside class="layout-main__sidebar filter">
        <div class="filter__title">Size</div>
        <div class="filter__area">
          <div class="grid grid--gutters grid--1of4">
            <product-size-filter :size="size" @filter="sizeFilter" v-for="(size, index) in sizeCollection" :key="index"></product-size-filter>
            <div class="grid-cell" v-if="this.products !== this.originalProducts">
                <button class="btn" @click="reset">Reset</button>
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
import ProductSizeFilter from './_ProductSizeFilter';

export default {
  name: `Home`,
  components: {
    Layout, 
    ProductCard,
    ProductSizeFilter
  },
  data() {
    return {
      products: [],
      originalProducts:[],
      message:''
    }
  },
  computed: {
    sizeCollection() {
      let sizeCollection = new Set();
      this.originalProducts.forEach(product => {
        product.sizes.forEach(size => {
          sizeCollection.add(size);
        });
      });
      return Array.from(sizeCollection).sort()
    }
  },
  mounted() {
    axios.get(
      '/fid-recruiting/fid-task-4-ffront-products.json'
    )
    .catch(() => {
        this.products = [];
        this.originalProducts = [];
    })
    .then(({data}) => {
      this.products = data;
      this.originalProducts = data;
    })
  },

  methods: {
    sizeFilter: function(size){
      this.products = this.originalProducts;
      this.products = this.products.filter(product => product.sizes.includes(size));
    },

    reset() {
      this.products = this.originalProducts;
    }
  },
};
</script>