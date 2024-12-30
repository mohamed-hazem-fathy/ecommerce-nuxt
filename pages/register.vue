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
              Let’s Get Started
            </p>
            <span style="color: #9098b1; margin-top: 5px"
              >Create an new account</span
            >
          </div>

          <v-form @submit.prevent="submit">
            <div style="width: 65%; margin: 1% auto; text-align: center">
              <div style="position: relative">
                <input
                  v-model="name"
                  style="
                    border: 1px solid #9098b1;
                    width: 90%;
                    height: 48px;
                    margin: 0 auto;
                    border-radius: 6px;
                  "
                  type="text"
                  placeholder="          Full Name"
                />
                <v-icon
                  style="
                    color: #9098b1;
                    position: absolute;
                    left: 40px;
                    top: 11px;
                  "
                  icon="mdi-account"
                ></v-icon>
              </div>

              <div class="mt-4" style="position: relative">
                <input
                  v-model="email"
                  style="
                    border: 1px solid #9098b1;
                    width: 90%;
                    height: 48px;
                    margin: 0 auto;
                    border-radius: 6px;
                  "
                  type="text"
                  placeholder="          Email"
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
                  style="
                    border: 1px solid #9098b1;
                    width: 90%;
                    height: 48px;
                    margin: 0 auto;
                    border-radius: 6px;
                  "
                  type="password"
                  placeholder="          password"
                />
                <v-icon
                  style="
                    color: #9098b1;
                    position: absolute;
                    left: 40px;
                    top: 11px;
                  "
                  icon="mdi-password"
                ></v-icon>
              </div>
              <div class="mt-4" style="position: relative">
                <input
                  style="
                    border: 1px solid #9098b1;
                    width: 90%;
                    height: 48px;
                    margin: 0 auto;
                    border-radius: 6px;
                  "
                  type="password"
                  placeholder="          Password Again"
                />
                <v-icon
                  style="
                    color: #9098b1;
                    position: absolute;
                    left: 40px;
                    top: 11px;
                  "
                  icon="mdi-password"
                ></v-icon>
              </div>

              <button
              type="submit"
              onclick="submit"
                class="mt-5"
                style="
                  color: white;
                  background-color: #40bfff;
                  width: 90%;
                  height: 57px;
                "
              >
                Register
              </button>
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
                I have an account?
                <a href="/pages//login.vue" style="color: #40bfff">login</a>
              </p>
            </div>
          </v-form>
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
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router"; // تأكد من استيراد useRouter بشكل صحيح

const name = ref("");
const email = ref("");
const password = ref("");
const router = useRouter(); // استخدام useRouter بشكل صحيح

// حالات الإشعار
const snackbarSuccess = ref(false);
const snackbarError = ref(false);

// رسائل الإشعار
const successMessage = ref("Account Created successfully!");
const errorMessage = ref("An error occurred during registration!");

const submit = async (event) => {
  event.preventDefault();

  try {
    // تصحيح اسم المسار API
    const response = await axios.post("http://127.0.0.1:8000/api/rigister", {
      name: name.value,
      email: email.value,
      password: password.value,
    });

    successMessage.value = "Account Created successfully!";
    snackbarSuccess.value = true;

    // الانتقال بعد ثانية واحدة إلى الصفحة الرئيسية
    setTimeout(() => {
      router.push("/"); // استخدام router.push بدلاً من navigateTo
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.user.name);
      console.log("Token:", response.data.token);
    }, 1500);

    console.log(response);
  } catch (error) {
    console.error("Error:", error);
    // عرض رسالة الخطأ في الإشعار
    errorMessage.value = "An error occurred during registration!";
    snackbarError.value = true;
  }
};
</script>

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
