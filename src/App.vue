<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" class="nav-link" exact>
                <img src="./assets/build-a-bot-logo.png" alt="bot image" class="logo">
                Build-a-Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Build'}" class="nav-link" exact>
                <img src="./assets/build-a-bot-logo.png" alt="bot image" class="logo">
                Build
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link :to="{name: 'Cart'}" class="nav-link" exact>
                Cart
          </router-link>
          <div class="cart-items">
            {{ cart.length }}
          </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"></router-view>
      </aside>
    </div>
    <main>
      <!-- <HomePage /> -->
      <router-view></router-view>
    </main> 
  </div>
</template>

<script>
// import HomePage from './home/HomePage.vue';
// import BuildRobot from './build/BuildRobot.vue';

export default {
  name: 'App',
  computed: {
    cart() {
      return this.$store.state.robots.cart;
    },
  },
};

</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main {
  margin-left: 195px;
  margin-top: -360px;
  padding: 30px;
  width: 964px;
  background-color: white;
  min-height: 300px; 
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.container {
  margin: 10px auto 0 auto;
}
.aside {
  padding: 30px;
  margin-left: 35px;
  background-color: #aaa;
  max-width: 100px;
  min-height: 300px;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.cart-items {
  position: relative;
  top: -5px;
  right: -9px;
  color: red;
  font-size: 14px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
