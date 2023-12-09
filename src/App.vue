<template>
  <div class="main-bg">
    <!-- <h1 style="color: black; text-align: center;">Bookstore</h1> -->
    <Navbar />
    <!-- <Details></Details> -->
    <router-view :books="books"></router-view>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import HomePage from "./components/HomePage.vue";
import Login from "./components/Login.vue";
import Details from "./components/Details.vue";
import axios from "axios";
import { counter } from "./stores/counter";

export default {
  data() {
    return {
      books: [],
      counter: counter(),
    };
  },
  components: {
    HomePage,
    Navbar,
    Login,
    Details,
  },
  beforeMount() {
    // useStore()
  },
  async created() {
    const { data } = await axios.get("/bookstore");
    this.books = data;
    // console.log(data)
  },
};
</script>
<style scoped>
h1 {
  color: #000;
}
/* .main-bg{
  background-color: aquamarine;
} */
</style>
