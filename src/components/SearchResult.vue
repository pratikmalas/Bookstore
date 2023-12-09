<template>
  <div class="row row-cols-1 row-cols-md-3 g-4" style="padding: 0px 20px">
    <div class="col-4" v-for="book in books" :key="book.id">
      <div class="card">
        <!-- <img :src="book.image" class="img-fluid card-img-top" alt="..." /> -->
        <div class="card-body">
          <h5 class="card-title">{{ book.title }}</h5>
          <p class="card-text">
            <b> {{ book.author }}</b>
          </p>
          <h4>${{ book.price }}</h4>
          <router-link :to="`/bookstore/${book.id}`" class="btn btn-primary">
            View
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      books,
    };
  },
  async mounted() {
    const { data } = await axios.get(`/books?q=${route.query.q}`);
    this.books=data
  },
};
</script>
<style scoped>
.view-btn:active {
  background-color: rgb(43, 43, 181);
  box-shadow: 0 0 0 3px #3e4999;
}
.view-btn {
  background-color: rgb(27, 27, 214);
  text-align: center;
  color: #fff;
  border-radius: 5px;
  border: none;
}
.card-text {
  color: rgb(136, 136, 136);
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
.card {
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  padding: 14px 80px 18px 36px;
  cursor: pointer;
}
.card-title {
  color: tomato;
}
</style>
