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

                <div class="about-btn">
                    <a class="btn" @click="shown">
                        Show All
                    </a>
            </div>
            </div>
        </div>
        <!-- <div class="Aboutus-banner col-lg-6 col-md-12">
            <div class="image-container">
                <a class="ishi-customhover-fadeinnormal product-banner" href="/" v-show="true">
                <div class="grid grid--gutters grid--1of5">
                    <div class="grid-cell" v-for="(item, index) in products" :key="index">        
                        <img 
                            :src="item.images[1]"
                            data-src="" 
                            data-sizes="auto" 
                            alt=""
                            style="height:10em"
                        >
                    </div>
                </div>
                </a>
            </div>
        </div>              
    
        <div class="information-container col-lg-6 col-md-12">
            <div class="title-container">    
                <h3 class="heading">Which brand has the most products that cost less than 40 EUR?</h3>
            </div>
            <div class="list-Aboutus-info">
                <p>Lorem ipsum, or lipsum as it is sometimes known, 
                    is dummy text used in laying out print, graphic or web designs. 
                    The passage is attributed to an unknown typesetter in the 15th century 
                    who is thought to have scrambled parts of Cicero's De Finibus Bonorum 
                    et Malorum for use in a type specimen book.Lorem ipsum.</p>
            </div>
            
            <div class="about-btn">
                <a class="btn" @click="shown">
                Contact Us
                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-arrow-right" viewBox="0 0 20 8">
                    <path d="M4.814 7.555C3.95 6.61 3.2 5.893 2.568 5.4 1.937 4.91 1.341 4.544.781 4.303v-.44a9.933 9.933 0 0 0 1.875-1.196c.606-.485 1.328-1.196 2.168-2.134h.752c-.612 1.309-1.253 2.315-1.924 3.018H19.23v.986H3.652c.495.632.84 1.1 1.036 1.406.195.306.485.843.869 1.612h-.743z" fill="#000" fill-rule="evenodd"></path>
                </svg>
                </a>
            </div>
            
        </div> -->
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