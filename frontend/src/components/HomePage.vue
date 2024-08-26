<template>
  <b-container>
    <b-row>
      <img alt="Vue logo" src="@/assets/main-banner.jpg" class="img-fluid mb-5" width="200px" height="500px">
      
      <!-- Check if products array is empty -->
      <b-col v-if="products.length === 0" cols="12" class="text-center">
        <p class="font-weight-bold">There are no products listed.</p>
      </b-col>
      
      <!-- Iterate through products when available -->
      <b-col
        v-else
        v-for="product in products"
        :key="product._id"
        cols="12"
        md="6"
        lg="4"
        class="mb-4"
      >
        <b-card
          :title="product.name"
          :img-src="product.imageUrl"
          img-alt="Product image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mx-auto"
        >
          <b-card-text>
            {{ product.description }}
            <strong class="d-block mt-2">${{ product.price }}</strong>
          </b-card-text>
          <b-button @click="addToCart(product)" variant="primary">Add to Cart</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios'; // Ensure axios is imported

export default {
  data() {
    return {
      products: [] // Array to hold products
    };
  },
  methods: {
    addToCart(product) {
      // Placeholder for adding product to cart
      this.$store.dispatch('addProductToCart', product);
    }
  },
  created() {
    // Fetching products from API on component creation
    axios.get('http://localhost:5002/api/products/')
      .then(response => {
        this.products = response.data; // Set fetched products to data
      })
      .catch(error => {
        console.error("There was an error fetching the products:", error);
        alert('Error fetching products.'); // Simple error alert, replace with a better error handling strategy
      });
  }
}
</script>

<style scoped>
/* Custom styles can be added here */
</style>
