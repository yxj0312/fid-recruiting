<template>
  <layout name="LayoutDefault">
    <div class="layout-main">
      <aside class="layout-main__sidebar filter">
        <div class="filter__title">Size</div>
        <div class="filter__area">
          <div class="grid grid--gutters grid--1of4">
            <product-size-filter :size="size" @filter="sizeFilter" v-for="(size, index) in filterSize" :key="index"></product-size-filter>
            <div class="grid-cell" v-if="this.products !== this.originalProducts">
                <button class="btn" @click="reset">Reset</button>
            </div>
          </div>
          <a @click.prevent="toggleSize">{{this.show ? 'Show less sizes' : 'Show more sizes'}}</a>
        </div>
      </aside>
      <div class="layout-main__content">
        <div class="top-area">
          <select v-model="selected" class="dropdown dropdown--item-per-rows">
            <option v-for="(item, index) in itemPerRows" :key="index" :value="'grid--1of' + item.value">
              {{ item.value + ' items per row' }}
            </option>
          </select>
      
          <select @change="sortedProducts(order)" v-model="order" class="dropdown">
            <option v-for="(item,index) in sortOptions" :value="item.value" :key="index" :disabled="item.disable">{{item.text}}</option>
          </select>
        </div>

        <div class="grid grid--card" :class="selected" >
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
  name: `ProductList`,
  components: {
    Layout, 
    ProductCard,
    ProductSizeFilter
  },
  data() {
    return {
      products: [],
      originalProducts:[],
      message:'',
      romaSize: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL'],
      filterSize: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL'],
      show: false,
      selected: 'grid--1of4',
      order:'',
      itemPerRows: [
        {value:8},{value:7},{value:6},{value:5},{value:4},{value:3},{value:2}
      ],
      sortOptions: [
        { text: 'sort price', value: '', disable: true},
        { text: 'highest price', value:'1', disable: false},
        { text: 'lowest price', value:'-1', disable: false}
      ]
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
    },
  },
  // mounted() {
  //   this.fetch();
  // },

  methods: {
    fetch() {
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

    sizeFilter: function(size){
      this.products = this.originalProducts;
      this.products = this.products.filter(product => product.sizes.includes(size));
    },

    reset() {
      this.products = this.originalProducts;
    },

    toggleSize() {
      this.show = !this.show;
      if (this.show) {
        this.filterSize = this.sizeCollection
      } else {
        this.filterSize = this.romaSize
      }
    },

    sortedProducts() {

      let test = this.products;
      test.sort((a, b) => this.order * ((b.priceR ? b.priceR : b.priceO) - (a.priceR ? a.priceR : a.priceO)));

      this.products = test;
    }
  },

  watch: {
    keyWord:{
      handler: 'fetch',
      immediate: true
    },
  },
};
</script>