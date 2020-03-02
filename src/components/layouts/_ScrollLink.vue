
<template>
    <a :href="href" @click.prevent="scroll" class="statistic-card-container__scroll-link">
        <span></span><slot></slot>
    </a>
</template>

<script>
    import smoothscroll from 'smoothscroll-polyfill';
    export default {
        props: ['href'],
        methods: {
            scroll() {
                // For older browsers, consider pulling in a polyfill.
                // https://www.npmjs.com/package/smoothscroll-polyfill
                smoothscroll.polyfill();
                document.querySelector(this.href)
                        .scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
</script>