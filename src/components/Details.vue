<template>
  <div class="row border m-5">
    
    <div class="col-4">
      <img class="details-img" :src="book.image" alt="" />
    </div>
    <div class="col-7 ms-4">
      <h2 style="text-align: center; color: #1de542">Books Details</h2>
      <hr />
      <h2 class="title">Title: {{ book.title }}</h2>
      <p style="color: rgb(113, 111, 111)">
        <b>Author: {{ book.author }}</b>
      </p>
      <p>
        <b>Genre: {{ book.genre }}</b>
      </p>
      <p>
        <b>Price: {{ book.price }}</b>
      </p>
      <p>
        <b>Availability: {{ book.availability }}</b>
      </p>
      <button type="button" @click="addtocart()">add to cart</button>
    </div>
  </div>
</template>
<script>
import { counter } from "../stores/counter";

export default {
  data() {
    return {
      book: {},
      counter: counter(),
    };
  },
  methods: {
    addtocart() {
      this.counter.addtocart(this.book)
      alert("Add To Cart")
    },
  },
  props: {
    books: Array,
  },
  mounted() {
    const newarr = this.books.filter(
      (book) => book.id == this.$route.params.id
    );
    this.book = newarr[0];
  },
};
</script>
<style scoped>
.details-img {
  width: 350px;
  height: 400px;
  padding: 10px 0px 10px 30px;
}
p {
  font-size: 22px;
}
.title {
  color: tomato;
}
.details-row {
  margin: 20px;
  background-color: bisque;
}
.left-item {
  padding: 10px 40px;
  max-width: auto;
  max-height: auto;
}
.right-item {
  /* padding-top: 30px; */
  padding: 60px 20px 10px;
}
.btncart {
  border-radius: 4px;
  background-color: rgb(0, 8, 255);
  padding: 3px 25px 3px;
  color: aliceblue;
  font-size: large;
  margin: 20px;
}
</style>
