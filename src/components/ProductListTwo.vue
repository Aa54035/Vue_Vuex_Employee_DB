<template>
  <div class="product-list-two" style="text-align:center">
      <h1>product list one </h1>
      <ul>
          <li v-for="item in products" :key="item.name">
              <span>{{item.name}}</span>
              <span class="price">{{item.price}}</span>

          </li>
      </ul>
  </div>
</template>

<script>
export default {

  computed:{
    products(){
      return this.$store.state.products
    }
  }

}
</script>

<style>
/* 
li {
    list-style: none;
    width:200px;
    color: azure;
    background: rgb(21, 206, 190);
    margin:10px auto;
    border-radius : 20px;
    font-style: normal;
    
}

li:hover {
        background: rgb(21, 206, 52);
        font-style:italic;
        font-weight: bold;

} */




.product-list-two{
  background: #D1E4FF;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  padding: 10px 20px;

}
.product-list-two ul{
  list-style-type: none;
  padding: 0;

}
.product-list-two li{
  margin-right: 10px;
  margin-top: 10px;
  padding:20px;
  background: rgba(255,255,255,0.7);
  }

.price{
  font-weight: bold;
  color:#860ceb;
  display:block;
}


</style>