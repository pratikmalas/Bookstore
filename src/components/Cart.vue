<template>
  <div class="row">

    <div class="col-7"  >
      <div class="row border m-5" v-for="(book,index) in addedbook" :key="book.id">
        <div class="col-4">
          <img class="details-imgg" :src="book.image" alt="" />
        </div>
        <div class="col-6 ms-2">
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
        </div>
        <div class="col-1 my-auto">
          <button type="button" class="removeitem" @click="removeItem(index)">Remove</button>
        </div>
      </div>
    </div>

    <div class="col-4 container">
      <div class="row align-itmes-center">
        <hr />
        <h6>Purchase Details</h6>
        <div class="col-md-6 txt shadow p-4">
          <div class="row clr p-2 rounded">
            <div class="col-md-6">
              <span for="">Total Items : </span>
              <span><b>{{addedbook.length}}</b></span> 
            </div>
            <div class="col-md-6 align-text-center">
              <span for="">Total Payble Amount : </span>
              <span><b>{{totalAmmount}}</b></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { counter } from "../stores/counter.js";
export default {
  data() {
    return {
      addedbook: [],
    };
  },
  methods: {
    removeItem(index){
      // console.log(index)
      this.addedbook.splice(index,1)
      this.payble()
    },
    payble(){
      if(this.addedbook.length){
        let total = 0;
        for(let i=0; i<this.addedbook.length;i++){
          total+=this.addedbook[i].price;
        }
        this.totalAmmount = total;
        console.log(this.totalAmmount)
      }
    }
  },
  mounted() {
    const cartStore = counter();
    this.addedbook = cartStore.bookstore;
    this.payble()
    // console.log("check",this.addedbook,cartStore);
  },

};
</script>
<style>
.details-imgg {
  width: 150px;
}
.removeitem{
  width: 100px;
  height: 40px;
}
</style>
