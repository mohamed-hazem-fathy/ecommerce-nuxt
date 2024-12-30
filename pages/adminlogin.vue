<template>
    <div>
      <v-container>
        <v-row>
          <v-col cols="2"></v-col>

          <v-col cols="12" sm="8">
            <div style="width: 90%; margin: 50px auto; text-align: center">
              <v-img
                style="width: 120px; margin: 0 auto"
                src="/imges/Icon.png"
              ></v-img>
              <p
                class="mt-1"
                style="font-size: 16px; font-weight: bold; letter-spacing: 1px"
              >
                Welcome to E-com
              </p>
              <span style="color: #9098b1; margin-top: 5px"
                >continue As A Boss</span
              >
            </div>

            <div style="width: 65%; margin: 1% auto; text-align: center">
              <v-form @submit.prevent="login">
                <div style="position: relative">
                  <input
                    v-model="email"
                    id="email-input"
                    style="
                      border: 1px solid #9098b1;
                      width: 90%;
                      height: 48px;
                      margin: 0 auto;
                      border-radius: 6px;
                    "
                    type="text"
                    placeholder="          Your email"
                  />
                  <v-icon
                    style="
                      color: #9098b1;
                      position: absolute;
                      left: 40px;
                      top: 11px;
                    "
                    icon="mdi-mail"
                  ></v-icon>
                </div>
                <div class="mt-4" style="position: relative">
                  <input
                    v-model="password"
                    id="password-input"
                    style="
                      border: 1px solid #9098b1;
                      width: 90%;
                      height: 48px;
                      margin: 0 auto;
                      border-radius: 6px;
                    "
                    type="password"
                    placeholder="          Your Password"
                  />
                  <br />
                  <a style="color: #40bfff" href="#">forget Password</a>
                </div>
                <v-btn
                  type="submit"
                  class="mt-5"
                  style="
                    color: white;
                    background-color: #40bfff;
                    width: 90%;
                    height: 57px;
                  "
                >
                  Login
                </v-btn>
            </v-form>
            </div>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
      </v-container>

    <!-- Snackbar for Success -->
    <v-snackbar
    v-model="snackbarSuccess"
    :timeout="3000"
    color="success"
    vertical="top"
    horizontal="right"
  >
    {{ successMessage }}
  </v-snackbar>

  <!-- Snackbar for Error -->
  <v-snackbar
    v-model="snackbarError"
    :timeout="3000"
    color="error"
    vertical="top"
    horizontal="right"
  >
    {{ errorMessage }}
  </v-snackbar>
    </div>
  </template>

  <script setup>
  import { ref } from "vue";
  import axios from "axios";
  import { useRouter } from "vue-router";

  const email = ref("");
  const password = ref("");
  const router = useRouter();


  // حالات الإشعار
  const snackbarSuccess = ref(false);
  const snackbarError = ref(false);

  // رسائل الإشعار
  const successMessage = ref("Login successful!");
  const errorMessage = ref("Invalid email or password");

  // Login function
  const login = async (event) => {
    event.preventDefault();
    if (!email.value || !password.value) {
      alert("Please fill in both fields");
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/logadmin", {
        email: email.value,
        password: password.value,
      });

      // Save token to localStorage and show success message
      localStorage.setItem("token", response.data.token);
      useCookie("loggedIn").value = true;

      successMessage.value = "Logged in successfully!";
      snackbarSuccess.value = true;

      setTimeout(() => {
        router.push("dashbord");
      }, 1500);
    } catch (error) {
      console.error("Login error:", error);
       // Show error message in snackbar
       errorMessage.value = "Invalid email or password";
      snackbarError.value = true;
    }
  };
  </script>


