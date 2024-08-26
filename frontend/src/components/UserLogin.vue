<template>
  <b-container class="user-login mt-5">
    <b-row>
      <b-col cols="12" md="6" lg="4" class="mx-auto">
        <b-card>
          <b-card-header class="text-center">
            <h1>User Login</h1>
          </b-card-header>
          <b-card-body>
            <b-form @submit.prevent="loginUser">
              <b-form-group label="Email:" label-for="login-email" label-cols-sm="4" label-align-sm="right"
                label-size="lg">
                <b-form-input id="login-email" type="email" v-model="email" placeholder="Enter your email"
                  required></b-form-input>
              </b-form-group>

              <b-form-group label="Password:" label-for="login-password" label-cols-sm="4" label-align-sm="right"
                label-size="lg">
                <b-form-input id="login-password" type="password" v-model="password" placeholder="Enter your password"
                  required></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary" block>Login</b-button>
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
  name: 'UserLogin',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    loginUser() {
      const loginData = {
        email: this.email,
        password: this.password
      };
      axios.post('http://localhost:5002/api/users/login', loginData)
        .then(response => {
          if (response.data) {
            // console.log('Login data:', response.data.email);  // Ensure this matches the actual structure
            localStorage.setItem('userToken', response.data.token);
            localStorage.setItem('email', response.data.email);
            this.$emit('auth-change');  // Emit an event to notify parent components
            this.$router.push('/'); // Redirect to home page or dashboard
          } else {
            console.log('No data received');
          }
          // console.log('Login data:', response.data.email);
          // // console.log('Login successful:', response.data.email);
          // // Store the token and username (or other user data) in local storage
          // localStorage.setItem('userToken', response.data.token);
          // localStorage.setItem('email', response.data.email); // Assuming the username is part of the response

        })
        .catch(error => {
          console.error('Login failed:', error.response.data);
          alert('Login failed: ' + (error.response && error.response.data ? error.response.data.message : 'Server error'));
        });
    }
  }
}
</script>

<style scoped>
.user-login {
  padding: 20px;
}
</style>
