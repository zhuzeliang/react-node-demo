<template>
  <div class="container">
    <div class="item">
      <router-link to="/Toast">Toast</router-link>
    </div>
    <div class="item">
      <router-link to="/Indicator">Indicator</router-link>
    </div>
    <div class="item">
      <router-link to="/Loadmore">Loadmore</router-link>
    </div>
    <div class="item">
      <router-link to="/Infinitescroll">Infinite scroll</router-link>
    </div>
    <div class="item">
      <router-link to="/Messagebox">Message box</router-link>
    </div>
    <div class="item">
      <router-link to="/Actionsheet">Action sheet</router-link>
    </div>
     <div class="item">
      <router-link to="/Popup">Popup</router-link>
    </div>
     <div class="item">
      <router-link to="/Swipe">Swipe</router-link>
    </div>
     <div class="item">
      <router-link to="/Lazyload">Lazy load</router-link>
    </div>
     <div class="item">
      <router-link to="/Range">Range</router-link>
    </div>
     <div class="item">
      <router-link to="/Progress">Progress</router-link>
    </div>
     <div class="item">
      <router-link to="/Picker">Picker</router-link>
    </div>
     <div class="item">
      <router-link to="/Datetimepicker">Datetime picker</router-link>
    </div>
     <div class="item">
      <router-link to="/Picker">Picker</router-link>
    </div>
     <div class="item">
      <router-link to="/IndexList">Index List</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
