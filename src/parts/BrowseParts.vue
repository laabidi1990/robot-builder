<template>
  <div>
    <h1>Browse Parts</h1>
    <ul class="menu">
      <li> <router-link :to="{ name: 'BrowseRobotHeads'}">Heads</router-link></li>
      <li> <router-link :to="{ name: 'BrowseRobotArms'}">Arms</router-link></li>
      <li> <router-link :to="{ name: 'BrowseRobotTorsos'}">Torsos</router-link></li>
      <li> <router-link :to="{ name: 'BrowseRobotBases'}">Bases</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'BrowseParts',
};
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .menu {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
    font-size: 20px;
  }
  ul {
    list-style-type: none;
  }
  a {
    color: palevioletred;
  }
</style>
