
<template>
  <ul>
    <li><router-link to="/o/3549">/o/3549</router-link></li>
    <li><router-link to="/p/books">/p/books</router-link></li>
    <li><router-link to="/100">/100</router-link></li>
    <li><router-link to="/usertest">/usertest</router-link></li>
    <li><router-link to="/one">/one</router-link></li>
    <li><router-link to="/one/two">/one/two</router-link></li>
    <li><router-link to="/one/two/three">/one/two/three</router-link></li>

    <li><router-link to="/1">/1</router-link></li>
    <li><router-link to="/1/2">/1/2</router-link></li>
    <li><router-link to="/1/2/3">/1/2/3</router-link></li>


    <li><router-link to="/usersa/posva">/usersa/posva</router-link></li>
    <li><router-link to="/usersa/posva/">/usersa/posva/</router-link></li>
    <li><router-link to="/Usersa/posva">/Usersa/posva</router-link></li>
  
    <li><router-link to="/usersa">/usersa</router-link></li>
    <li><router-link to="/Usersa">/Usersa</router-link></li>
    <li><router-link to="/usersa/42">/usersa/42</router-link></li>
    <li><router-link to="/usersa/">/usersa/</router-link></li>
    <li><router-link to="/usersa/42/">/usersa/42/</router-link></li>
  
    <li><router-link to="/usersb">/usersb</router-link></li>
    <li><router-link to="/usersb/posva">/usersb/posva</router-link></li>

    <li><router-link to="/usersc">/usersc</router-link></li>
    <li><router-link to="/usersc/42">/usersc/42</router-link></li>

  </ul>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

li:not(:last-of-type) {
  margin-right: 1rem;
}

.router-link-active {
  color: orange;
}

.router-link-exact-active {
  color: crimson;
}
</style>
