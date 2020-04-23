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
                
      
                   <!-- <img
                    :src="changed"
                    v-touch:touchhold="enterImage"
                    v-touch:end="leaveImage"
                    @mouseleave="leaveImage"
                    @mouseenter="enterImage"
                    :alt="product.description"
                    :key="renderkey"
                    > -->
          
                
                <!-- <img
                    :src="image"
                    v-if="!hover"
                    v-touch:touchhold="changeImage"
                    @mouseover="changeImage"
                    @mouseout="changeImage"
                    :alt="product.description"
                    class="card-image">
                <img
                    :src="image2"
                    v-if="hover"
                    v-touch:touchhold="changeImage"
                    @mouseover="changeImage"
                    @mouseout="changeImage"
                    :alt="product.description"
                    class="card-image-transition">
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
                hover: false
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
            changeImage() {
                setTimeout(() => {
                    this.hover = !this.hover;
                }, 300);
            },
        },

        watch: {
            changed() {
                this.renderkey++
            }
        },

    }
</script>