<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="2"></v-col>

        <v-col cols="12" sm="8">
          <div style="width: 90%; margin: 50px auto; text-align: center">
            <v-img
              style="width: 120px; margin: 0 auto"
              src="/assets/imges/Icon.png"
            ></v-img>
            <p
              class="mt-1"
              style="font-size: 16px; font-weight: bold; letter-spacing: 1px"
            >
              Welcome to E-com
            </p>
            <span style="color: #9098b1; margin-top: 5px"
              >Sign in to continue</span
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
                  type="text"
                  placeholder="          Your Password"
                />
                <br />
                <a style="color: #40bfff" href="#">forget Password</a>
              </div>
              <v-btn
                onClick="submit"
                type="submit"
                class="mt-5"
                style="
                  color: white;
                  background-color: #40bfff;
                  width: 90%;
                  height: 57px;
                "
              >
                Register
              </v-btn>
            </v-form>

            <br />
            <br />
            <div style="position: relative"><span class="or">or</span></div>

            <v-btn
              class="mt-5"
              style="
                color: #9098b1;
                border: 1px solid #ebf0ff;
                border-radius: 5px;
                width: 90%;
                height: 57px;
              "
            >
              <a href="#"
                ><v-icon
                  style="
                    color: #9098b1;
                    position: absolute;
                    left: 40px;
                    top: 7px;
                  "
                  icon="mdile-google"
                ></v-icon
              ></a>
              Login with Google
            </v-btn>

            <v-btn
              class="mt-5"
              style="
                color: #9098b1;
                border: 1px solid #ebf0ff;
                border-radius: 5px;
                width: 90%;
                height: 57px;
              "
            >
              <a href="#"
                ><v-icon
                  style="position: absolute; left: 40px; top: 7px"
                  icon="mdile-facebook"
                ></v-icon
              ></a>
              Login with facebook
            </v-btn>
            <p class="mt-5">
              Don’t have a account?
              <a href="/pages/register.vue" style="color: #40bfff">Register</a>
            </p>
          </div>
        </v-col>

        <v-col cols="2"></v-col>

        DD
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.or::before {
  content: "";
  width: 200px;
  position: absolute;
  background-color: gray;
  height: 1px;
  left: 29px;
  top: 12px;
}
.or::after {
  content: "";
  width: 200px;
  position: absolute;
  background-color: gray;
  height: 1px;
  right: 29px;
  top: 12px;
}
</style>

<script setup>
import axios from "axios";

const email = ref("");
const password = ref("");

const login = async (event) => {
  event.preventDefault();

  try {
    const respons = await axios.post("http://127.0.0.1:8000/api/login", {
      email: email.value,
      password: password.value
    });
    setTimeout(() => {
      navigateTo("/");
      useCookie("loggedIn").value = true;
      let token = respons.data.token;
      localStorage.setItem("token", respons.data.token)
      console.log(token)
    }, 1500);
    console.log(respons)
    console.log(token)

  } catch (error) {
    console.error('error = ', error)
  }
};
</script>
