<template>
    <layout name="LayoutDefault">
        <div class="layout-main">
            <!-- <fusioncharts
                :type="type"
     
                :dataFormat="dataFormat"
                :dataSource="dataSource"
                >
            </fusioncharts> -->

            <!-- <bars
            :data="barData"
            :gradient="['#ffbe88', '#ff93df']"
            :barWidth="5"
            :growDuration="1"
            padding="18" 
            :width="200"
            :height="200" >

            </bars> -->

            <v-chart :options="{
                title: {
                    text: '极坐标双数值轴'
                },
                legend: {
                    data: ['line']
                },
                polar: {
                    center: ['50%', '54%']
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                angleAxis: {
                    type: 'value',
                    startAngle: 0
                },
                radiusAxis: {
                    min: 0
                },
                series: [
                    {
                        coordinateSystem: 'polar',
                        name: 'line',
                        type: 'line',
                        showSymbol: false,
                        data: echartData
                    }
                ],
                animationDuration: 2000
            }"/>
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
            Layout, 

        },

        
        
        data() {

            
    
            return {      
                products: [],
                originalProducts:[],
                type:'bar2d',
                // width:'50%',
                // height:'100%',
                dataFormat:'json',

                

                // polar: {
                //     title: {
                //     text: '极坐标双数值轴'
                //     },
                //     legend: {
                //     data: ['line']
                //     },
                //     polar: {
                //     center: ['50%', '54%']
                //     },
                //     tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {
                //         type: 'cross'
                //     }
                //     },
                //     angleAxis: {
                //     type: 'value',
                //     startAngle: 0
                //     },
                //     radiusAxis: {
                //     min: 0
                //     },
                //     series: [
                //     {
                //         coordinateSystem: 'polar',
                //         name: 'line',
                //         type: 'line',
                //         showSymbol: false,
                //         data: data
                //     }
                //     ],
                //     animationDuration: 2000
                // }                
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
            echartData() {
                let echart = []

                for (let i = 0; i <= 360; i++) {
                    let t = i / 180 * Math.PI
                    let r = Math.sin(2 * t) * Math.cos(2 * t)
                    echart.push([r, i])
                }
                return echart;
            },

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
                    console.log(index);
                    console.log(object[index])
                })
                console.log(object);
                let arr = Object.values(object)
                return this.getMin(arr);
            },

            dataSource() {
                return   {chart: {
                        caption: 'Recommended Portfolio Split',
                        subCaption: 'For a net-worth of $1M',
                        showValues: '1',
                        showPercentInTooltip: '0',
                        // numberPrefix: '$',
                        enableMultiSlicing: '1',
                        theme: 'Candy'
                    },
                    data: this.countedBrand.map(product => ({label:product[0], value: product[1]}))
            }},

            barData() {
                return this.countedBrand.map(product => ({value: product[1], title:product[0]}))
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
        },
    }
</script>