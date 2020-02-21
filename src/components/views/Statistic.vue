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
            
        },

        methods: {
            
        }
    }
</script>