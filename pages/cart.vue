<template>
  <Nav></Nav>

  <div
    class="mb-15"
    style="text-align: center; width: 100%; background-color: #f6f7f8"
  >
    <v-btn
      style="background-color: #f6f7f8"
      :ripple="false"
      class="btn"
      rounded
      size="x-large"
      ><nuxt-link style="color: #33a0ff" class="link" to="/"
        >H<span class="li">ome</span></nuxt-link
      ><v-icon icon="mdi-chevron-right"></v-icon
      ><span style="font-size: 18px; color: #33a0ff" class="text-button"
        ><NuxtLink style="color: #33a0ff" to="/product"
          >Hot Deal</NuxtLink
        ></span
      >
      <v-icon icon="mdi-chevron-right"></v-icon>
      <span style="font-size: 18px; color: black" class="text-button"
        >Nike Airmax 270 React</span
      >
    </v-btn>
  </div>
  <v-container>
    <h2 class="mb-5" style="text-align: center; font-size: 40px">
      Shopping Cart
    </h2>

    <v-row>
      <v-col
        v-for="(item, index) in cartItems"
        :key="index"
        cols="12"
        sm="6"
        lg="3"
      >
        <v-card width="100%" class="mx-auto pb-2">
          <v-img :src="item.image" height="200px" cover>
            <template v-slot:placeholder>
              <v-row align="center" class="fill-height ma-0" justify="center">
                <v-progress-circular
                  color="grey lighten-5"
                  indeterminate
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>

          <v-card-title
            class="d-flex"
            style="font-size: 20px; color: #00bcd4; font-weight: bold"
          >
            {{ item.name }}
            <v-spacer></v-spacer>
            <span
              style="
                color: black;
                text-decoration: line-through;
                font-size: 14px;
              "
              >${{ item.price }}</span
            >
            <v-spacer></v-spacer>
            <span style="color: red; font-size: 14px">{{ item.discount }}</span>
          </v-card-title>

          <v-card-actions style="display: flex; flex-direction: row-reverse">
            <v-btn @click="decrementQuantity(item.id)" color="red" icon>
              <v-icon>mdi-minus</v-icon>
            </v-btn>

            <span class="mx-2">{{ item.quantity }}</span>

            <v-btn @click="incrementQuantity(item.id)" color="green" icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-actions>

          <v-card-actions style="display: flex; justify-content: space-between">
            <p>Total: ${{ item.cost }}</p>
            <v-btn @click="removeFromCart(item.id)" color="error" icon>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="8">
        <div>
          <input
            style="border: 1px solid #f1f3f4; height: 45px; border-radius: 6px"
            type="text"
            placeholder="Voucher code"
          />
          <v-btn style="height: 45px; background-color: #33a0ff; color: white"
            >Redeem</v-btn
          >
        </div>
      </v-col>

      <v-col cols="12" sm="4">
        <div class="d-flex justify-lg-space-between mt-7">
          <span style="font-size: 18px">Subtotal</span>
          <span style="font-size: 18px">${{ subtotal }}</span>
        </div>
        <div class="d-flex justify-lg-space-between mt-6">
          <span style="font-size: 18px">Shipping fee</span>
          <span style="font-size: 18px">$20</span>
        </div>
        <div class="d-flex justify-lg-space-between mt-6">
          <span style="font-size: 18px">Coupon</span>
          <span style="font-size: 18px">No</span>
        </div>
        <hr class="mt-5 mb-5" color="#F6F7F8" />

        <div class="d-flex justify-lg-space-between">
          <p style="color: #22262a; font-size: 30px">TOTAL</p>
          <P style="color: #22262a; font-size: 30px">${{ totalPrice }}</P>
        </div>

        <v-btn
          class="mt-6"
          style="
            color: white;
            background-color: #33a0ff;
            width: 100%;
            height: 50px;
          "
          >Check out</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useCardStore } from "~/stores/card";
import Nav from "@/components/global/nav.vue";

definePageMeta({
  middleware: ['auth']

});

export default {
  computed: {
    cartItems() {
      const store = useCardStore();
      return store.formattedCart; // استرجاع العناصر من السلة
    },
    subtotal() {
      // حساب التكلفة الفرعية لكل المنتجات
      return this.cartItems.reduce((total, item) => total + item.cost, 0);
    },
    totalPrice() {
      // إضافة رسوم الشحن
      return this.subtotal + 20; // رسوم الشحن ثابتة هنا بـ 20$
    },
  },
  methods: {
    incrementQuantity(productId) {
      const store = useCardStore();
      store.increment(productId); // زيادة الكمية
    },
    decrementQuantity(productId) {
      const store = useCardStore();
      store.decrement(productId); // تقليل الكمية
    },
    removeFromCart(productId) {
      const store = useCardStore();
      store.remove(productId); // إزالة المنتج من السلة
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
}
.cart-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}
</style>
