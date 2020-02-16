<template>
    <div class="grid-cell grid-cell--border">
        <div class="product-card">
        <div class="product-image">
            <a :href="product.url">
                <img
                    :src="image"
                    v-if="hover"
                    @mouseover="changeImage"
                    @mouseout="changeImage"
                    :alt="product.description">
                <img
                    :src="image2"
                    v-if="!hover"
                    @mouseover="changeImage"
                    @mouseout="changeImage"
                    :alt="product.description">
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
                hover: true
            }
        },

        computed: {
            image() {
                return this.product.images[0]
            },
            image2() {
                return this.product.images[1]
            }
        },


        methods: {
            changeImage() {
                this.hover = !this.hover;
            },
        },

    }
</script>