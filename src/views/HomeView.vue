<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ProductListOne />
    <ProductListTwo />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ProductListOne from "@/components/ProductListOne.vue";
import ProductListTwo from "@/components/ProductListTwo.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    ProductListOne,
    ProductListTwo,
  },
};
</script>
