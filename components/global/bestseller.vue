<template>
    <div>
        <h2 class="mb-5" style="text-align: center; font-size:40px;">BEST SELLER</h2>

            <v-tabs
              v-model="tab"
              align-tabs="center"
              color="blue"
            >
              <v-tab :value="1">All</v-tab>
              <v-tab :value="2">Bags</v-tab>
              <v-tab :value="3">Sneakers</v-tab>
              <v-tab :value="4">Belt</v-tab>
              <v-tab :value="5">Sunglasses</v-tab>
            </v-tabs>
    </div>
    <div class="containercustmize"  >
        <v-row>


            <v-col cols="12" sm="3">
                <template>
                    <v-card
                      class="mx-auto"
                      max-width="400"
                    >
                    <div class="hot">HOT</div>
                      <v-img
                        class="align-end text-white team-item"
                        height="250"
                        src="/assets/imges/image Product4.png"
                        cover
                      >
                      <v-expand-transition>
                        <div
                          v-if="isHovering"
                          class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
                          style="height: 100%;"
                        >
                          $14.99
                        </div>
                      </v-expand-transition>
                      </v-img>
                      <p class="title_Card">Nike Air Max 270 React</p>

                      <div style="" class="text-center">
                        <v-rating
                        :size="30"
                        color="yellow"
                          v-model="rating"
                          readonly
                        ></v-rating>
                      </div>

                      <div class="d-flex justify-lg-space-evenly align-center mb-2">
                        <span style="font-size: 20px; color: #00bcd4; font-weight:bold;">$<span style="font-size:20px;">2</span>99,43</span>
                        <span style="color:black; text-decoration: line-through; font-size:14px">$534,33</span>
                        <span style="color: red; font-size:14px"> 24% Off</span>
                      </div>

                    </v-card>
                  </template>
            </v-col>


            <v-col cols="12" sm="3">
                <template>
                    <v-card
                      class="mx-auto"
                      max-width="400"
                    >
                      <v-img
                        class="align-end text-white team-item"
                        height="250"
                        src="/assets/imges/image Product3.png"
                        cover
                      >
                      </v-img>
                      <p class="title_Card">Nike Air Max 270 React</p>

                      <div style="" class="text-center">
                        <v-rating
                        :size="30"
                        color="yellow"
                          v-model="rating"
                          readonly
                        ></v-rating>
                      </div>

                      <div class="d-flex justify-lg-space-evenly align-center mb-2">
                        <span style="font-size: 20px; color: #00bcd4; font-weight:bold;">$<span style="font-size:20px;">2</span>99,43</span>
                        <span style="color:black; text-decoration: line-through; font-size:14px">$534,33</span>
                        <span style="color: red; font-size:14px"> 24% Off</span>
                      </div>

                    </v-card>
                  </template>
            </v-col>

            <v-col cols="12" sm="3">
                <template>
                    <v-card
                      class="mx-auto"
                      max-width="400"
                    >
                      <v-img
                        class="align-end text-white team-item"
                        height="250"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        cover
                      >
                      </v-img>
                      <p class="title_Card">Nike Air Max 270 React</p>

                      <div style="" class="text-center">
                        <v-rating
                        :size="30"
                        color="yellow"
                          v-model="rating"
                          readonly
                        ></v-rating>
                      </div>

                      <div class="d-flex justify-lg-space-evenly align-center mb-2">
                        <span style="font-size: 20px; color: #00bcd4; font-weight:bold;">$<span style="font-size:20px;">2</span>99,43</span>
                        <span style="color:black; text-decoration: line-through; font-size:14px">$534,33</span>
                        <span style="color: red; font-size:14px"> 24% Off</span>
                      </div>

                    </v-card>
                  </template>
            </v-col>

            <v-col cols="12" sm="3">
                <template>
                    <v-card
                      class="mx-auto"
                      max-width="400"
                    >
                      <v-img
                        class="align-end text-white team-item"
                        height="250"
                        src="/assets/imges/image Product1.png"
                        cover
                      >
                      </v-img>
                      <p class="title_Card">Nike Air Max 270 React</p>

                      <div style="" class="text-center">
                        <v-rating
                        :size="30"
                        color="yellow"
                          v-model="rating"
                          readonly
                        ></v-rating>
                      </div>

                      <div class="d-flex justify-lg-space-evenly align-center mb-2">
                        <span style="font-size: 20px; color: #00bcd4; font-weight:bold;">$<span style="font-size:20px;">2</span>99,43</span>
                        <span style="color:black; text-decoration: line-through; font-size:14px">$534,33</span>
                        <span style="color: red; font-size:14px"> 24% Off</span>
                      </div>

                    </v-card>
                  </template>
            </v-col>


            <v-col cols="12" sm="3">
                <template>
                    <v-card
                      class="mx-auto"
                      max-width="400"
                    >
                      <v-img
                        class="align-end text-white team-item"
                        height="250"
                        src="/assets/imges/Product Picture5.png"
                        cover
                      >
                      </v-img>
                      <p class="title_Card">Nike Air Max 270 React</p>

                      <div style="" class="text-center">
                        <v-rating
                        :size="30"
                        color="yellow"
                          v-model="rating"
                          readonly
                        ></v-rating>
                      </div>

                      <div class="d-flex justify-lg-space-evenly align-center mb-2">
                        <span style="font-size: 20px; color: #00bcd4; font-weight:bold;">$<span style="font-size:20px;">2</span>99,43</span>
                        <span style="color:black; text-decoration: line-through; font-size:14px">$534,33</span>
                        <span style="color: red; font-size:14px"> 24% Off</span>
                      </div>

                    </v-card>
                  </template>
            </v-col>


            <v-col cols="12" sm="3">
                <template>
                    <v-card
                      class="mx-auto"
                      max-width="400"
                    >
                      <v-img
                        class="align-end text-white team-item"
                        height="250"
                        src="/assets/imges/Product Picture6.png"
                        cover
                      >
                      </v-img>
                      <p class="title_Card">Nike Air Max 270 React</p>

                      <div style="" class="text-center">
                        <v-rating
                        :size="30"
                        color="yellow"
                          v-model="rating"
                          readonly
                        ></v-rating>
                      </div>

                      <div class="d-flex justify-lg-space-evenly align-center mb-2">
                        <span style="font-size: 20px; color: #00bcd4; font-weight:bold;">$<span style="font-size:20px;">2</span>99,43</span>
                        <span style="color:black; text-decoration: line-through; font-size:14px">$534,33</span>
                        <span style="color: red; font-size:14px"> 24% Off</span>
                      </div>

                    </v-card>
                  </template>
            </v-col>


            <v-col cols="12" sm="3">
                <template>
                    <v-card
                      class="mx-auto"
                      max-width="400"
                    >
                      <v-img
                        class="align-end text-white team-item"
                        height="250"
                        src="/assets/imges/Product Picture7.png"
                        cover
                      >
                      </v-img>
                      <p class="title_Card">Nike Air Max 270 React</p>

                      <div style="" class="text-center">
                        <v-rating
                        :size="30"
                        color="yellow"
                          v-model="rating"
                          readonly
                        ></v-rating>
                      </div>

                      <div class="d-flex justify-lg-space-evenly align-center mb-2">
                        <span style="font-size: 20px; color: #00bcd4; font-weight:bold;">$<span style="font-size:20px;">2</span>99,43</span>
                        <span style="color:black; text-decoration: line-through; font-size:14px">$534,33</span>
                        <span style="color: red; font-size:14px"> 24% Off</span>
                      </div>

                    </v-card>
                  </template>
            </v-col>


            <v-col cols="12" sm="3">
                <template>

                    <v-card
                      class="mx-auto"
                      max-width="400"
                    >
                      <v-img
                        class="align-end text-white team-item"
                        height="250"
                        src="/assets/imges/image Product1.png"
                        cover
                      >
                      </v-img>
                      <p class="title_Card">Nike Air Max 270 React</p>

                      <div style="" class="text-center">
                        <v-rating
                        :size="30"
                        color="yellow"
                          v-model="rating"
                          readonly
                        ></v-rating>
                      </div>

                      <div class="d-flex justify-lg-space-evenly align-center mb-2">
                        <span style="font-size: 20px; color: #00bcd4; font-weight:bold;">$<span style="font-size:20px;">2</span>99,43</span>
                        <span style="color:black; text-decoration: line-through; font-size:14px">$534,33</span>
                        <span style="color: red; font-size:14px"> 24% Off</span>
                      </div>

                    </v-card>

                  </template>
            </v-col>
        </v-row>
        <v-container class="text-center mt-2">
          <!-- الزر -->
          <v-btn

            color=""
            class="learn-more-btn transparent-button"
            @click="handleLearnMore"
          >
            Learn More
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-container>
    </div>
</template>

<script >
        export default {
            data: () => ({
      rating: 4,
    }),
        }
</script>

<style lang="scss" scoped>

.containercustmize {
    width:100%;
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
  opacity: .9;
  position: absolute;
  width: 100%;
}

.transparent-button {
  background-color: transparent; /* خلفية شفافة */
  color: #40BFFF; /* نص باللون الأزرق */
  border-bottom: 1px solid #40BFFF; /* يمكنك إضافة حد أزرق إذا كنت تريد */
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

.hot {
  background-color: #FF4858;
  color: white;
  width: 50px;
  position: absolute;
  z-index: 999;
  text-align: center;
}

</style>