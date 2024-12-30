<template>
  <div>
    <h2 class="mb-5" style="text-align: center; font-size: 40px">
      BEST SELLER
    </h2>

    <v-tabs v-model="tab" align-tabs="center" color="blue">
      <v-tab class="all" :value="1">All</v-tab>
      <v-tab class="alll" :value="2">Bags</v-tab>
      <v-tab class="alll" :value="3">Sneakers</v-tab>
      <v-tab class="alll" :value="4">Belt</v-tab>
      <v-tab class="alll" :value="5">Sunglasses</v-tab>
    </v-tabs>
  </div>

    <v-row class="my-5">
      <v-col cols="12">
        <v-btn @click="grid = !grid" :class="{ 'bg-primary': !grid }">
          <v-icon> mdi-shoe-formal </v-icon>
        </v-btn>
        <v-btn
          @click="grid = !grid"
          :class="{ 'bg-primary': grid }"
          class="ml-3"
        >
          <v-icon> mdi-shoe-heel </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row v-show="grid">
          <v-col
            v-for="(product, i) in products"
            :key="i"
            cols="12"
            lg="4"
            sm="6"
          >
            <v-card  class="mx-auto pb-2">
              <v-img :src="product.image" height="200px" cover>
                <template v-slot:placeholder>
                  <v-row
                    align="center"
                    class="fill-height ma-0"
                    justify="center"
                  >
                    <v-progress-circular
                      color="grey lighten-5"
                      indeterminate
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>

              <v-card-title
                style="
                  font-size: 20px;
                  color: #00bcd4;
                  font-weight: bold;
                  display: flex;
                "
                >$<span>{{ product.price }}</span> <v-spacer></v-spacer>
                <span
                  style="
                    color: black;
                    text-decoration: line-through;
                    font-size: 14px;
                  "
                  >{{ product.oldPrice }}</span
                >
                <v-spacer></v-spacer>
                <span style="color: red; font-size: 14px">{{
                  product.discount
                }}</span>
              </v-card-title>
              <v-card-actions style="">
                <v-btn style="background-color: #00bcd4">
                  Add To Cart
                  <v-icon class="ml-2" @click="cartStore.add(product.id)">
                    mdi-cart-outline</v-icon
                  >
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-show="!grid">
          <v-col
            class="mt-3"
            cols="12"
            lg="4"
            sm="6"
            v-for="(product, i) in products"
            :key="i"
          >
            <v-card width="450px" class="mx-auto pb-2">
              <v-img :src="product.image" height="200px" cover>
                <template v-slot:placeholder>
                  <v-row
                    align="center"
                    class="fill-height ma-0"
                    justify="center"
                  >
                    <v-progress-circular
                      color="grey lighten-5"
                      indeterminate
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <p class="title_Card">{{ product.name }}</p>
              <v-card-title
                style="
                  font-size: 20px;
                  color: #00bcd4;
                  font-weight: bold;
                  display: flex;
                "
                >$<span>{{ product.price }}</span> <v-spacer></v-spacer>
                <span
                  style="
                    color: black;
                    text-decoration: line-through;
                    font-size: 14px;
                  "
                  >{{ product.oldPrice }}</span
                >
                <v-spacer></v-spacer>
                <span style="color: red; font-size: 14px">{{
                  product.discount
                }}</span>
              </v-card-title>
              <v-card-actions
                style="display: flex; flex-direction: row-reverse"
              >
                <v-btn  @click="cartStore.add(product)" style="background-color: #40bfff">
                  Add To Cart
                  <v-icon class="ml-2">
                    mdi-cart-outline</v-icon
                  >
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <div class="mt-5" style="display: flex; justify-content: center">
          <v-btn
            color=""
            class="learn-more-btn transparent-button align-center"
            @click="handleLearnMore"
          >
            Learn More
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>

</template>

<script setup>
import data from "~/data";
import { useCardStore  } from "~/stores/card.js";
const cartStore = useCardStore();
const products = ref(data);
const womanProd = ref(false);
</script>

<style lang="scss" scoped>
.containercustmize {
  width: 100%;
  margin: 0 auto;
}

.title_Card {
  color: black;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}

.transparent-button {
  background-color: transparent; /* خلفية شفافة */
  color: #40bfff; /* نص باللون الأزرق */
  border-bottom: 1px solid #40bfff; /* يمكنك إضافة حد أزرق إذا كنت تريد */
}

.team-item {
  position: relative;
}
.team-item:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  top: 0;
  left: 0;
  background-color: #0dcaf0;
  opacity: 0;
}
.team-item:hover::after {
  width: 100%;
  height: 100%;
  opacity: 0.2;
  border-radius: 5px;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 0.8s;
}
.team-item::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  right: 0;
  background-color: #0dcaf0;
  opacity: 0;
}
.team-item:hover::before {
  width: 100%;
  height: 100%;
  opacity: 0.2;
  border-radius: 5px;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 0.8s;
}

@media (max-width: 800px) {
  .all {
    margin-left: -30px !important;
  }
  .alll {
    margin-left: -22px !important;
  }
}

.hot {
  background-color: #ff4858;
  color: white;
  width: 50px;
  position: absolute;
  z-index: 999;
  text-align: center;
}

.icon-spin-reverse {
  display: inline-block;
  -moz-animation: spin-reverse 2s infinite linear;
  -o-animation: spin-reverse 2s infinite linear;
  -webkit-animation: spin-reverse 2s infinite linear;
  animation: spin-reverse 2s infinite linear;
}
</style>
