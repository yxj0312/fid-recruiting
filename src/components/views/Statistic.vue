<template>
    <layout name="LayoutDefault">
        <div class="layout-main">
            <statistic-card></statistic-card>
            <!-- <div>
                <h2>
                    Which brand has the most products that cost less than 40 EUR
                </h2>
                <div style="background: yellow;position: relative;">
                    <h2 style="color: red; font-size: 60px;font-weight: 400;text-transform: uppercase;letter-spacing: 0.1px;"
                    
                    >RIVIEW</h2>
                    <img :src="products[0].images[1]" alt="">
                </div>  
            </div> -->
            <!-- <column-chart 
                :data="countedBrand" 
                :legend="false" 
                :colors="this.getRandomColor(this.countedBrand.length)"  
                title="which brand has the most products that cost less than 40 EUR"
                xtitle="All Brand have the products that cost less than 40 EUR"
                ytitle="Count"
                width="50em"
                heigth="50em"
                :stacked="true"
                :discrete="true"
                :messages="{empty: 'No data'}"
            /> -->
        </div>
    </layout>
</template>

<script>
import axios from 'axios';
import Layout from '../layouts/Layout';
import StatisticCard from './_StatisticCard'

    export default {
        name: 'Statitic',        
        components: {
            Layout,
            StatisticCard
        },

        data() {
            return {      
                products: [],
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

        computed: {
            priceLessThanFourty() {
                return this.products.filter(product => {
                    return this.getPrice(product) < 40
                }).map(product => product.brand)
            },

            countedBrand() {
                return [...this.totallNum(this.priceLessThanFourty)].map(([key, val]) => ({data:{[key]: val}}))
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
            },

            lowestAvgPrice() {
                return this.products.filter(product => {
                    return product.sizes.includes('32')
                }).map(product=>({
                    brand:product.brand, price: this.getPrice(product)
                }))
            },

            hello() {
                return this.groupBy(this.lowestAvgPrice, 'brand')
            },

            bye() {
                var object = {}
                Object.keys(this.hello).forEach((key,index) => {
                    object[index] = {brand: key, avg:this.average(this.hello[key])}
                })
                let arr = Object.values(object)
                return this.getMin(arr);
            },

            color() {
                return this.getRandomColor(this.countedBrand.length)
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
            },

            getMin(arr) {
                return arr.reduce((p, c) => p.avg < c.avg ? p : c);
            },

            groupBy(objectArray, property) {
                return objectArray.reduce(function (acc, obj) {
                    let key = obj[property]
                    if (!acc[key]) {
                    acc[key] = []
                    }
                    acc[key].push(obj)
                    return acc
                }, {})
            },

            average(nums) {
                return nums.reduce((a,b)=>a + b.price, 0) / nums.length               
            },

            getRandomColor(length) {
                var array= [];
                for (let i = 0; i < length; i++) {
                    array.push('#' + Math.floor(Math.random()*16777215).toString(16))
                }
                return array;
            }
        },
    }
</script>