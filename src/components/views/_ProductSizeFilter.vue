<template>
    <div class="grid-cell">
        <button class="btn" @click="$emit('filter', size)" v-text="size"></button>
    </div>
</template>

<script>
    export default {
        props: ['size'],

        components: {},

        data() {
            return {
                
            }
        },

        computed: {
            
        },

        methods: {
            
        }
    }
</script>