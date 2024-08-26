<template>
  <b-container class="user-register mt-5">
    <b-row>
      <b-col cols="12" md="6" lg="4" class="mx-auto">
        <b-card>
          <b-card-header class="text-center">
            <h1>User Registration</h1>
          </b-card-header>
          <b-card-body>
            <b-form @submit.prevent="registerUser">
              <b-form-group label="Full Name:" label-for="full-name-input">
                <b-form-input
                  id="full-name-input"
                  v-model="fullName"
                  placeholder="Enter your full name"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Email:" label-for="email-input">
                <b-form-input
                  type="email"
                  id="email-input"
                  v-model="email"
                  placeholder="Enter your email"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Password:" label-for="password-input">
                <b-form-input
                  type="password"
                  id="password-input"
                  v-model="password"
                  placeholder="Enter your password"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary" block>Register</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserRegister',
  data() {
    return {
      fullName: '',
      email: '',
      password: ''
    };
  },
  methods: {
    registerUser() {
      const userData = {
        fullName: this.fullName,
        email: this.email,
        password: this.password
      };
      axios.post('http://localhost:5002/api/users/register', userData)
        .then(response => {
          alert('User registered successfully!');
          console.log(response.data);
          this.$router.push('/login');
        })
        .catch(error => {
          console.error('Failed to register:', error.response ? error.response.data : 'No detailed error info available');
          alert('Failed to register. ' + (error.response && error.response.data ? error.response.data.message : 'No error details.'));
        });
    }
  }
}
</script>

<style scoped>
.user-register {
  padding: 20px;
}
</style>
