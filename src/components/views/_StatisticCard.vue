<template>
    <div class="statistic-card">
        <div class="statistic-card__image grid grid--statistic grid--1of5" v-if="show">
            <div class="grid-cell" v-for="(item, index) in products" :key="index" >
                <img :src="item.images[1]" alt="">
            </div>
        </div>
        <div class="statistic-card__image" v-if="!show">
            <div>
                <img :src="products[1].images ? products[1].images[1]: null"/>
            </div>
        </div>
        <div class="statistic-card__information">
            <div class="card-info-container">
                <div class="card-info-container__heading">
                    Which brand has the most products that cost less than 40 EUR?
                </div>

                <div class="card-info-container__infos">
                    <!-- REVIEW -->
                    <img src="http://review-fashion.com/sites/review-fashion.com/themes/review/logo.png" alt="">
                </div>

                <div class="card-info-container__button">
                    <a class="btn btn--statistic" @click="shown">
                        Show All
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'products'
        ],

        components: {},

        data() {
            return {
                show: false

            }
        },

        computed: {
            
        },

        methods: {
            shown() {
                this.show = !this.show;
            }
        },

        watch: {

        },
    }
</script>