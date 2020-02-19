<template>
  <div class="layout">
    <layout-header></layout-header>

    <main class="layout__main">
      <slot/>
    </main>
    
    <footer class="layout__footer">
      &copy; Awesome Company
    </footer>
  </div>
</template>

<script>
import LayoutHeader from './_LayoutHeader';

export default {
  name: `LayoutDefault`,

  data() {
    return {
      user: null,
    };
  },

  components: {
    LayoutHeader
  },

  created() {
    // Simulate fetching user data.
    setTimeout(() => {
      this.user = { name: `John Doe` };
    }, 2000);
  },
};
</script>