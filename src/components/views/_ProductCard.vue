<template>
    <div class="grid-cell grid-cell--border">
        <div class="product-card">
        <div class="product-image" >
            <a :href="product.url" target="_blank">
                <!-- <img
                    :src="image"
                    @mouseover="changeImage"
                    @mouseout="changeImage"
                    :alt="product.description"> -->
                
      
                   <img
                    :src="changed"
                    v-touch:touchhold="changeImage"
                    @mouseleave="leaveImage"
                    @mouseenter="enterImage"
                    :alt="product.description"
                    :key="renderkey">
          
                
                <!-- <img
                    :src="image"
                    v-if="hover"
                    v-touch:touchhold="changeImage"
                    @mouseover="changeImage"
                    @mouseout="changeImage"
                    :alt="product.description">
                
                
                
                
                <img
                    :src="image2"
                    v-if="!hover"
                    v-touch:touchhold="changeImage"
                    @mouseover="changeImage"
                    @mouseout="changeImage"
                    :alt="product.description"> -->
                
            </a>
        </div>
        <div class="product-info">
            <div class="product-info__sale-price" v-show="product.priceR">{{product.priceR}}</div>
            <div :class="product.priceR ? 'product-info__price-strike-through': 'product-info__regular-price'">{{product.priceO}}</div>
            <div class="product-info__brand">{{product.brand}}</div>
            <div class="product-info__descriptions">{{product.description}}</div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['product'],

        components: {},

        data() {
            return {
                hover: true,
                renderkey: 0
            }
        },

        computed: {
            // image() {
            //     return this.product.images[0]
            // },
            // image2() {
            //     return this.product.images[1]
            // },
            changed() {
               return  this.hover ? this.product.images[0] : this.product.images[1]
            }
        },


        methods: {
            enterImage() {
                setTimeout(() => {
                    this.hover = false;
                }, 500);
            },
            leaveImage() {
                setTimeout(() => {
                    this.hover = true;
                }, 500);
            },
        },

        watch: {
            changed() {
                this.renderkey++
            }
        },

    }
</script>
