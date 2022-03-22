<template>
  <div class="product-list-one" style="text-align:center">
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
.product-list-one{
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.5);
  margin-bottom: 30px;
  padding: 10px 20px;

}
.product-list-one ul{
  list-style-type: none;
  padding: 0;

}
.product-list-one li{
  display: inline-block;
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