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
        <div class="grid grid--gutters grid--1of4">
            <div class="grid-cell grid-cell--border">
              <div class="product-card">
                <div class="product-image">
                  <a :href="products[0].url">
                    <img :src="products[0].images[0]" alt="">
                  </a>
                </div>
                <div class="product-info">
                  <div class="product-info__sale-price" v-show="products[0].priceR">{{products[0].priceR}}</div>
                  <div :class="products[0].priceR ? 'product-info__price-strike-through': 'product-info__regular-price'">{{products[0].priceO}}</div>
                  <div class="product-info__brand">{{products[0].brand}}</div>
                  <div class="product-info__descriptions">{{products[0].description}}</div>
                </div>
              </div>
            </div>
            <div class="grid-cell grid-cell--border">
              <div class="product-card">
                <div class="product-image">
                  <img :src="products[0].images[1]" alt="">
                </div>
                <div class="product-info">
                  <div class="product-info__sale-price">{{products[0].priceO}}</div>
                  <div class="product-info__regular-price">{{products[0].priceR}}</div>
                  <div class="product-info__brand">{{products[0].brand}}</div>
                  <div class="product-info__descriptions">{{products[0].description}}</div>
                </div>
              </div>
            </div>
            <div class="grid-cell grid-cell--border">
              <div class="product-card">
                <div class="product-image">
                  <img :src="products[0].images[0]" alt="">
                </div>
                <div class="product-info">
                  <div class="product-info__sale-price">{{products[0].priceO}}</div>
                  <div class="product-info__regular-price">{{products[0].priceR}}</div>
                  <div class="product-info__brand">{{products[0].brand}}</div>
                  <div class="product-info__descriptions">{{products[0].description}}</div>
                </div>
              </div>
            </div>
            <div class="grid-cell grid-cell--border">
              <div class="product-card">
                <div class="product-image">
                  <img :src="products[0].images[0]" alt="">
                </div>
                <div class="product-info">
                  <div class="product-info__sale-price">{{products[0].priceO}}</div>
                  <div class="product-info__regular-price">{{products[0].priceR}}</div>
                  <div class="product-info__brand">{{products[0].brand}}</div>
                  <div class="product-info__descriptions">{{products[0].description}}</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import axios from 'axios';
import Layout from '../layouts/Layout';

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