
import {defineStore} from "pinia";
export const counter= defineStore('cart',{
  state:()=> {
    return{
       bookstore:[],
       totalAmmount : 0,
    }
  },
  getters:{
    getBooksAddedInCart (state){
      return state.bookstore;
  },
  },
  actions:{
    addtocart(Details){
      //  const existingItem = this.bookstore.find((item) => item.id === Details.id)
      // console.log(this)
       
      // if (existingItem) {
      //   existingItem.quantity += 1
      //   alert('+1 quantity added')
      // }else{
        this.bookstore.push(Details)
      // }
      // console.log(this.bookstore)
    },
  }
})

