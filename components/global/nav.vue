<template>
  <nav>
    <div class="navbar">
      <v-contaner>
        <v-row class="" style="width: 80%; margin: 0px auto; height: 50px">
          <v-col cols="6">
            <span>EN <icondown /></span>
            <span>USD <icondown /></span>
          </v-col>
          <v-col cols="6">
            <div >
              <ul
                class="d-flex justify-space-between align-center"
                style="list-style: none; margin-top: -18px"
              >
                <li>
                  <span
                    ><nuxt-link to="#" class="text-decoration-none text-white">
                      <div class="user-prof d-flex align-center">
                        <NuxtLink to="/">
                          <v-avatar class="mt-2">
                            <v-img
                              class=""
                              alt="John"
                              src="/imges/mohamedhazem.jpg"
                            ></v-img> </v-avatar
                        ></NuxtLink>

                        <h3 style="color: black" class="ml-3 mt-2">Gest</h3>
                      </div>
                    </nuxt-link></span
                  >
                </li>
                <li style="margin-top:24px;">
                    <nuxt-link to="/cart">
                      <v-badge :content="cartStore.productsTotal || 0"   color="error">
                        <v-icon> mdi-cart-outline</v-icon>
                      </v-badge>
                    </nuxt-link>
                </li>
                <li class="mt-4"><span>items</span></li>
                <li class="mt-3">
                  <span >$0.00 <searsh /></span>
                </li>
                <nuxt-link class="mt-3"
                  style="
                    background-color: aqua;
                    padding: 5px;
                    border-radius: 7px;
                  "
                  to="/login"
                  >login</nuxt-link
                >
              </ul>
            </div>
          </v-col>
        </v-row>
        <hr class="mt-1" />
        <v-row style="width: 80%; margin: 0px auto; height: 50px">
          <v-col cols="4">
            <div class="logo d-flex align-center" style="gap: 10px">
              <logo />
              E-Comm
            </div>
          </v-col>
          <v-col cols="8">
            <ul
              class="d-flex justify-space-between align-center mt-2"
              style="list-style: none"
            >
              <li>
                <v-menu offset-y>
                  <template v-slot:activator="{ props }">
                    <a
                      style="cursor: pointer"
                      class="stylefontlink"
                      v-bind="props"
                      >Home<v-icon icon="mdi-chevron-down"></v-icon
                    ></a>
                  </template>
                  <v-list class="d-flex">
                    <v-list-item-group>
                      <v-list-item>
                        <v-list-item-title
                          ><nuxt-link to="/product"
                            >Corporate Shoes</nuxt-link
                          ></v-list-item-title
                        >
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Sneakers</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Sandals</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Sport Shoe</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Trainers</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>HOT DEAL</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Sunglasses</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Belts</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Handbags</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Sneakers</v-list-item-title>
                      </v-list-item>
                    </v-list-item-group>
                    <v-list-item-group>
                      <v-list-item>
                        <v-list-item-title>Corporate Shoes</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Sneakers</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Sandals</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Sport Shoe</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Trainers</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title
                          ><nuxt-link to="/">
                            HOT DEAL
                          </nuxt-link></v-list-item-title
                        >
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Sunglasses</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Belts</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Handbags</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Sneakers</v-list-item-title>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-menu>
              </li>
              <li>
                <nuxt-link class="link" style="color: black" to="/product"
                  ><a class="stylefontlink">BAGS</a></nuxt-link
                >
              </li>
              <li>
                <nuxt-link style="color: black" to="/product"
                  ><a class="stylefontlink">SNEAKERS</a></nuxt-link
                >
              </li>
              <li><a class="stylefontlink" href="#">BELT</a></li>
              <li>
                <nuxt-link class="link" style="color: black" to="/contact"
                  ><a class="stylefontlink">CONTACT</a></nuxt-link
                >
              </li>
            </ul>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8"> </v-col>
        </v-row>
      </v-contaner>
    </div>
    <div class="navephone">
      <v-container>
        <v-row>
          <v-col cols="19">
            <div>
              <input
                class="inputsearch"
                type="text"
                placeholder="Search Product"
              />
            </div>
          </v-col>
          <v-col cols="3">
            <div class="d-flex align-center justify-center">
              <div style="width: 50%; margin-right: 30px">
                <i style="font-size: 35px" class="fa-regular fa-heart"></i>
              </div>
              <div style="width: 50%; margin-right: 12px">
                <i style="font-size: 35px" class="fa-regular fa-bell"></i>
              </div>
              <div>
                <!-- الأيقونة التي تفتح القائمة -->
                <i
                  @click="toggleMenu"
                  style="font-size: 33px; color: black; cursor: pointer"
                  class="fas fa-bars"
                ></i>
              </div>
            </div>
          </v-col>
        </v-row>

        <!-- القائمة الجانبية -->
        <transition name="fade">
          <div v-if="isMenuOpen" class="side-menu">
            <ul>
              <li><a href="#">Products</a></li>
              <hr style="color: #40bfff" class="mt-3" />
              <li><a href="#">About Us</a></li>
              <hr style="color: #40bfff" class="mt-3" />
              <li><a href="#">Contact</a></li>
              <hr style="color: #40bfff" class="mt-3" />
              <li><a href="login">login</a></li>
              <hr style="color: #40bfff" class="mt-3" />
              <li>
                <a href="#" @click="toggleMenu">Close Menu</a>
              </li>
            </ul>
          </div>
        </transition>
      </v-container>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import { useCardStore } from '~/stores/card'; // Ensure this path is correct

import icondown from "../icons/arrowdown";
import profile from "../icons/profile";
import cart from "../icons/cart";
import searsh from "../icons/sersh";
import logo from "../icons/logo";
import dropdown from "./dropdown.vue";

export default {
  name: "navbar",
  components: { icondown, profile, cart, searsh, logo, dropdown },
  setup() {
    const isMenuOpen = ref(false);
    const cartStore = useCardStore(); // Initialize the store here
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return { isMenuOpen, toggleMenu, cartStore };
  },
};
</script>
<style lang="scss">
a {
  text-decoration: none;
  &:hover {
    color: 40BFFF;
  }
}
.profile {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-top: 7px;
}
.mynav {
  max-height: 150px;
}
.menuitem {
  color: black;
}
.stylefontlink {
  color: black;
  font-size: 18px;
}
.stylefontlink {
  &:hover {
    color: #40bfff;
  }
}

.stylefontlink.link:hover {
  color: #40bfff;
}

.navbar {
  @media (max-width: 1145px) {
    font-size: 24px;
    display: none; // نص أصغر على شاشات الموبايل
  }
}
.navephone {
  display: none;
  @media (max-width: 1145px) {
    display: block; // نص أصغر على شاشات الموبايل
  }
}
.inputsearch {
  border: 1px solid #40bfff;
  width: 90%;
  padding: 8px;
  border-radius: 4px;
}
</style>
