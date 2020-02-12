<template>
  <layout name="LayoutDefault">
    <div class="layout-default__row">
      <div class="layout-default__column side-nav-column grid--1of3">
        <div class="layout-default__row side-nav">
          <nav class="side-nav-container">
            <div class="side-nav-component">
              <div class="side-nav-facets">
                <div class="side-nav-facet">
                  <div class="sticky side-nav-header">
                    <h2 class="sticky side-facet-heading">
                      <span>Sizes</span>
                    </h2>
                  </div>
                  <div class="side-nav-facet-items sizes height-overflow">
                    <ul>
                      <li>XS</li>
                      <li>S</li>
                      <li>M</li>
                      <li>L</li>
                      <li>XL</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="layout-default__column grid--3of4">
        <div class="layout-default__row product-grid">
          <div class="product-grid-container grid--full columns">
            <div class="product-grid-top-area">
              <div class="page-count">
                <div>
                  1 - 60 of 60
                </div>
                <div class="filter">
                  filter here
                </div>
              </div>
            </div>
            <div class="grid-small-1-medium-3 row small-up-1 medium-up-3">
              <div class="column">
                <div class="product-card row">
                  <div class="columns small-7 medium-12">
                    <div class="card-image-container">
                      <div>
                        <a>
                          <img src="" alt="">
                        </a>
                      </div>
                    </div>
                    <div class="product-card-colors hide-for-small-only">

                    </div>
                  </div>
                </div>
                <div class="columns small-5 medium-12">
                  <span class="price-tag" data-talos="srpProductPrice">
                    <span class="sale-price">Sale: $12.99</span>
                    <span class="regular-price strike-through">Regular: $29.99</span>
                    <span class="markdown-price">You Save: $17.00</span>
                  </span>
                    <h4 class="product-card-title">
                      <a>
                      Seoul Dynasty 58'' x 6.5'' Overwatch League Argyle Scarf
                      </a>
                    </h4>
                    <div class="product-card-colors show-for-small-only">
                      <div class="card-color-selector-container"></div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div v-for="(product, index) in products" :key="index">  
          <div v-for="(image, index) in product.images" :key="'image'+index">
            <img :src=image alt="" v-if="image">
            <div v-else>Loading...</div> 
          </div>
        </div> -->
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