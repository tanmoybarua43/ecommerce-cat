<template>
  <b-container class="py-5">
    <b-row>
      <b-col cols="12" md="8" lg="6" class="mx-auto">
        <img alt="Vue logo" src="@/assets/home-banner.jpg" class="img-fluid">
        <b-card no-body class="border-0 shadow-sm" bg-variant="light">
          <h1 class="my-4 text-center">Add New Product</h1>
          <b-card-body>
            <b-alert variant="success" :show="showSuccessAlert" @dismissed="showSuccessAlert = false" dismissible>
              {{ feedbackMessage }}
            </b-alert>
            <b-alert variant="danger" :show="showErrorAlert" @dismissed="showErrorAlert = false" dismissible>
              {{ errorMessage }}
            </b-alert>

            <b-form @submit.prevent="addProduct">
              <!-- Product Name -->
              <b-form-group label="Product Name:" label-for="name-input" label-size="lg" label-class="font-weight-bold">
                <b-form-input id="name-input" v-model="product.name" placeholder="Enter product name" required size="lg"
                  class="rounded-0"></b-form-input>
              </b-form-group>
              <!-- Price -->
              <b-form-group label="Price:" label-for="price-input" label-size="lg" label-class="font-weight-bold">
                <b-form-input id="price-input" type="number" v-model="product.price" placeholder="0.00" required
                  size="lg" class="rounded-0"></b-form-input>
              </b-form-group>
              <!-- Description -->
              <b-form-group label="Description:" label-for="description-textarea" label-size="lg"
                label-class="font-weight-bold">
                <b-form-textarea id="description-textarea" v-model="product.description" rows="4"
                  placeholder="Describe the product" required size="lg" class="rounded-0"></b-form-textarea>
              </b-form-group>

              <!-- Submit Button -->
              <b-button type="submit" variant="success" block size="lg">Add Product</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>


<style scoped>
/* Optional: Additional custom styles here */
</style>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {
        name: '',
        price: null,
        description: ''
      },
      feedbackMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    addProduct() {
      axios.post(`http://localhost:5002/api/products/add`, this.product)
        .then(response => {
          // Assuming the server responds with the added product details
          this.feedbackMessage = `Product added successfully!`;
          this.errorMessage = ''; // Clear any previous errors
          console.log(`Product added:`, response.data); // Log the response data
          this.resetProduct(); // Reset the product form after successful addition
        })
        .catch(error => {
          this.errorMessage = "Error adding product: " + (error.response && error.response.data && error.response.data.message ? error.response.data.message : 'Unexpected error occurred');
          this.feedbackMessage = ''; // Clear any previous success messages
          console.error("Error adding product:", error.response ? error.response.data : 'No detailed error info available');
        });
    },
    resetProduct() {
      this.product = {
        name: '',
        price: null,
        description: ''
      };
    }
  }
}
</script>


<!-- this.$router.push('/') -->
