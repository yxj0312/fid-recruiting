<template>
    <layout name="LayoutDefault">
        <div class="layout-main">
            123
        </div>
    </layout>
</template>

<script>
import axios from 'axios';
import Layout from '../layouts/Layout';
    export default {
        name: 'Statitic',
        props: [],

        components: {
            Layout
        },

        data() {
            return {      
                products: [],
                originalProducts:[],
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

        computed: {
            priceLessThanFourty() {
                return this.products.filter(product => {
                    return this.getPrice(product) < 40
                }).map(product => product.brand)
            },

            countedBrand() {
                return [...this.totallNum(this.priceLessThanFourty)]
            },

            sizeSelectionCount() {
                return this.products.map(product => ({
                    brand:product.brand, length:product.sizes.length
                }))
            },

            countedSizeSelection() {
                return this.sizeSelectionCount.filter(product => {
                    return product.length == this.getMaxLength(this.sizeSelectionCount)
                })
            },

            getDistinctBrand() {
                return [...new Set(this.countedSizeSelection.map(product => product.brand))];
            }
        },

        methods: {
            getPrice(product) {
                return product.priceR ? product.priceR : product.priceO
            },

            totallNum(arr) {
                return arr.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map());  
            },

            getMaxLength(arr) {
                return arr.reduce((p, c) => p.length > c.length ? p : c).length;
            }
        }
    }
</script>