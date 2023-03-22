<template>
  <div>
    <nav>
      <!-- <button @click="toVue">Vue</button> -->
      <!-- <button @click="toReact">React</button> -->
      <router-link to="/vue">Vue</router-link> |
      <router-link to="/react">React</router-link>
    </nav>
    <div id="container1"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    toReact() {
      history.pushState(null, '/react', '/react')
      // this.$router.push({
      //   path: '/react'
      // })
    },
    toVue() {
      // this.$router.push({
      //   path: '/vue'
      // })
      history.pushState(null, '/vue', '/vue')
    }
  },
  mounted() {
    // this.listenRouterChange()
    console.log("load vue-main")
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
