<template>
    <div class="Aboutus-information">
            
              <div class="Aboutus-banner col-lg-6 col-md-12">
                <div class="image-container">
                  <a class="ishi-customhover-fadeinnormal product-banner" href="/">
                    <img src="//cdn.shopify.com/s/files/1/0271/0536/1973/files/About-Us-Banner-1.png?v=1569048319" data-src="" data-sizes="auto" alt="">
                  </a>
                </div>
              </div>              
            
            <div class="information-container col-lg-6 col-md-12">
              <div class="title-container">
                
                  <h3 class="heading">We Have Everything You Need ?</h3>
                
              </div>
              <div class="list-Aboutus-info">
                
                  <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum.</p>
                
              </div>
              
                <div class="about-btn">
                  <a href="/pages/contact" class="btn">
                    Contact Us
                    <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-arrow-right" viewBox="0 0 20 8"><path d="M4.814 7.555C3.95 6.61 3.2 5.893 2.568 5.4 1.937 4.91 1.341 4.544.781 4.303v-.44a9.933 9.933 0 0 0 1.875-1.196c.606-.485 1.328-1.196 2.168-2.134h.752c-.612 1.309-1.253 2.315-1.924 3.018H19.23v.986H3.652c.495.632.84 1.1 1.036 1.406.195.306.485.843.869 1.612h-.743z" fill="#000" fill-rule="evenodd"></path></svg>
                  </a>
                </div>
              
            </div>
          </div>
</template>

<script>
    export default {
        props: [],

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

<style>
.heading {
    line-height: 34px;
    margin: 0;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 0;
}

.list-Aboutus-info {
    margin-bottom: 50px;

    
}

.list-Aboutus-info p {
        font-size: 14px;
        font-weight: 400;
        color: #777;
        letter-spacing: 0.5px;
        line-height: 24px;
    }

.title-container {
    padding: 0;
    margin-bottom: 20px;
}

.about-btn {
    margin-top: 20px;
}


.col-lg-6 {
    width: 50%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px
}

.col-md-12 {
    width: 100%;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px
}


.Aboutus-information {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0px;
}

.Aboutus-information a {
    display: inline-block;
    position: relative;
}
</style>