<template>
  <div class="layout">
    <header class="layout__header">
        it is header
    </header>

    <!-- <div class="layout__column">
        <div class="layout__row header">
          <header>
            <div class="main-bar" role="banner">
              <div class="logo">
                <div class="responsive-image">
                  <img src="../../assets/logo/logo-peek-und-cloppenburg.03c0.svg" alt="P&C Logo" loading="auto">
                </div>
              </div>
            </div>
            <nav class="top-nav-container">
              <ul class="top-nav-component" role="menu">
                <li class="top-nav-item">
                  <router-link to="/">Product List</router-link>
                  <router-link to="/about">About</router-link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
    </div> -->
    <main >
      <slot/>
    </main>
    <footer class="layout__footer">
      &copy; Awesome Company
    </footer>
  </div>
</template>

<script>

export default {
  name: `LayoutDefault`,
  data() {
    return {
      user: null,
    };
  },
  created() {
    // Simulate fetching user data.
    setTimeout(() => {
      this.user = { name: `John Doe` };
    }, 2000);
  },
};
</script>

<style lang="scss">
// .LayoutDefault {
//   max-width: 42em;
//   margin-right: auto;
//   margin-left: auto;
//   padding-right: 1em;
//   padding-left: 1em;
//   &__nav {
//     padding-top: 1em;
//     padding-bottom: 1em;
//     border-bottom: 1px solid #c0c0c0;
//   }
//   &__user {
//     float: right;
//   }
//   &__main {
//     padding-top: 1.5em;
//     padding-bottom: 2em;
//   }
//   &__footer {
//     padding-top: 1em;
//     padding-bottom: 1em;
//     border-top: 1px solid #c0c0c0;
//   }
// }
</style>