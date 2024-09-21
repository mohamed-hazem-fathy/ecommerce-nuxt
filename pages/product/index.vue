<template>
    <div >
        <myNav></myNav>
        <div class="mb-15" style="text-align:center; width: 100%; background-color:#F6F7F8 ">

        <v-btn style="background-color:#F6F7F8" :ripple="false" class="btn" rounded size="x-large"
        ><nuxt-link  style="color:#33A0FF;" class="link" to="/">H<span class="li">ome</span></nuxt-link
        ><v-icon icon="mdi-chevron-right"></v-icon
        ><span style="color:black;" class="text-button">Hoot Deal</span></v-btn>

        </div>


            <v-container>
                <v-row>
                    <v-col cols="12" sm="3">

                        <v-card style="margin-top:-12px">
                            <v-card-title>Hot Deals</v-card-title>
                            <v-list>
                              <v-list-item v-for="item in hotDeals" :key="item.name">
                                <v-list-item-content class="d-flex justify-lg-space-between itemcard">
                                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                                  <v-list-item-subtitle>{{ item.count }}</v-list-item-subtitle>
                                </v-list-item-content>
                              </v-list-item>
                            </v-list>

                        </v-card>

                        <v-card class="mt-15" style="margin-top:-12px;">
                            <v-card-title>Pricing</v-card-title>
                            <v-list>
                                <v-range-slider style=" padding:30px;"
                                v-model="value"
                                step="10"
                                thumb-label="always"
                              ></v-range-slider>
                            </v-list>

                        </v-card>
                        <v-card class="mt-15" style="height: 120px;">
                            <v-card-title>Colors</v-card-title>
                        <v-row>
                            <v-col cols="12">
                              <v-form>
                                <v-row>
                                  <v-col v-for="color in colors" :key="color" cols="2">
                                    <v-btn
                                    siz
                                      :style="{ backgroundColor: color }"
                                      class="color-btn"
                                      @click="selectColor(color)"
                                    >
                                      <v-icon v-if="selectedColor === color">mdi-check</v-icon>
                                    </v-btn>
                                  </v-col>
                                </v-row>
                              </v-form>
                            </v-col>
                          </v-row>
                        </v-card>


                         <v-card style="margin-top:-120px">
                            <v-card-title>BRAND</v-card-title>
                            <v-list>
                              <v-list-item v-for="item in BRAND" :key="item.name">
                                <v-list-item-content class="d-flex justify-lg-space-between itemcard">
                                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                                  <v-list-item-subtitle>{{ item.count }}</v-list-item-subtitle>
                                </v-list-item-content>
                              </v-list-item>
                            </v-list>

                        </v-card>

                        <v-card class="mt-5">
                            <v-card-title style="text-align: center;">MORE</v-card-title>
                        </v-card>
                    </v-col>




                    <v-col class="snekers" cols="12" sm="9">
                        <v-row style="background-color: #40BFFF;">
                            <v-col><div class="snekers position-relative">

                                <div style=" line-height:1; position: absolute; left:50px; top:10px">
                                    <div class="title"><h2 style="color: white; padding:10px; font-size:40px; font-weight:100;">Adidas Men Running
                                        Sneakers</h2></div>
                                    <div class="subtitle">
                                        <p style="color: white; padding:10px; font-size:20px; opacity:.9">Performance and design. Taken right to the edge.</p>
                                    </div>
                                    <v-btn
                                    style="color: white; background-color:#40BFFF"
                                    class=" mt-6 shop-now-button transparent-button"
                                    @click="handleShopNow"
                                >
                                    Shop Now
                                    <span class="border"></span> <!-- عنصر الحدود -->
                                </v-btn>
                                </div>

                            </div></v-col>
                            <v-col>
                            <div style="position: relative;">
                                <img class="snky" style="width: 100%;; position: absolute; top:-62px; right:20px" src="/assets/imges/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png" alt="">
                            </div>
                            </v-col>
                        </v-row>

                        <v-row style="background-color:#F6F7F8; height:76px; border-radius:6px;" class="mt-9 mb-5">
                            <v-col cols="12">
                              <v-toolbar  style="background-color:#F6F7F8 ;">
                                <v-toolbar-title>13 Items</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-select
                                  v-model="sortBy"
                                  :items="sortOptions"
                                  label="Sort By"
                                  class="mr-4"
                                ></v-select>
                                <v-select
                                  v-model="showCount"
                                  :items="showOptions"
                                  label="Show"
                                ></v-select>
                                <v-btn icon>
                                  <v-icon>mdi-view-grid</v-icon>
                                </v-btn>
                                <v-btn icon>
                                  <v-icon>mdi-view-list</v-icon>
                                </v-btn>
                              </v-toolbar>
                            </v-col>
                          </v-row>

                          <v-row>


                            <v-col  cols="12" sm="3">
                                <template>
                                    <v-card style=""
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


                            <v-col cols="12" sm="3">
                                <template>

                                    <v-card
                                      class="mx-auto"
                                      max-width="400"
                                    >
                                      <v-img
                                        class="align-end text-white team-item"
                                        height="250"
                                        src="/assets/imges/image Product4.png"
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
                        </v-row>


                        <div>
                        <v-row style="background-color:#F6F7F8; border-radius:6px" class="mt-5" justify="center">
                            <v-pagination
                              v-model="currentPage"
                              :length="totalPages"
                              circle
                              color="blue"
                            ></v-pagination>
                          </v-row>
                        </div>
                    </v-col>
                </v-row>
            </v-container>



            <div>

                <div class="" style="background-color:#BCDDFE; margin-top:700px">
                    <v-container>
                        <v-row class="mt-15 mb-15">
                            <v-col cols="12" sm="4">
                           <div class="d-flex">
                            <img style=" border-radius:45%; height:50px; width: 50px;" src="/assets/imges/ico5.png"></img>
                            <h2 style="margin-left: 8px;">E-Comm</h2>
                           </div>
                           <p class="mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                            </v-col>


                            <v-col cols="12" sm="4">
                              <div class="d-flex">

                               <h2 style="margin-left: 8px;">Follow Us</h2>
                              </div>
                              <p class="mt-9">Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                              <ul class="d-flex mt-5 " style="list-style:none">
                                <li><img  src="/assets/imges/facebook.png" alt=""></li>
                                <li><img class="ml-15" src="/assets/imges/twitter.png" alt=""></li>
                              </ul>
                               </v-col>


                               <v-col cols="12" sm="4">
                                <div class="d-flex">

                                 <h2 style="margin-left: 8px;">Contact Us</h2>
                                </div>
                                <p class="mt-9">E-Comm , 4578<br>mo hazem,<br> Glasgow D04 89GR</p>

                                 </v-col>
                        </v-row>

                        <v-row>
                          <v-col cols="12" sm="3">
                            <h2 class="mb-9" style="font-weight: 100;">infomation</h2>
                            <p>About Us<br>
                              Infomation<br>
                              Privacy Policy<br>
                              Terms & Conditions</p>

                            </v-col>


                          <v-col cols="12" sm="3">
                            <h2 class="mb-9" style="font-weight: 100;">Service</h2>
                            <p>About Us<br>
                              Infomation<br>
                              Privacy Policy<br>
                              Terms & Conditions</p>

                          </v-col>


                          <v-col cols="12" sm="3">
                            <h2 class="mb-9" style="font-weight: 100;">My Account</h2>
                            <p>About Us<br>
                              Infomation<br>
                              Privacy Policy<br>
                              Terms & Conditions</p>

                          </v-col>

                          <v-col cols="12" sm="3">
                            <h2 class="mb-9" style="font-weight: 100;">Our Offers</h2>
                            <p>About Us<br>
                              Infomation<br>
                              Privacy Policy<br>
                              Terms & Conditions</p>

                          </v-col>





                        </v-row>
                        <hr class="mt-6" style="color: white !important;">
                        <br>
                        <div class="d-flex justify-lg-space-between">
                          <p>© 2024 Ecommerce theme by www.bisenbaev.com</p>
                          <ul style="list-style:none">
                            <li><img src="/assets/imges/Brands.png" alt=""></li>
                          </ul>
                        </div>


                    </v-container>

                </div>
            </div>












     <footer></footer>



    </div>
</template>

<script>
import myNav from "/components/global/nav";
import footer from "/components/global/footer";
    export default {
        components:{myNav, footer},
             data() {
    return {
        colors: ['#2196F3', '#F44336', '#000000', '#FFEB3B', '#E91E63', '#F5F5F5'],
        selectedColor: null,
        value: [20, 40],
        currentPage: 3, // الصفحة الحالية
        totalPages: 5,
      hotDeals: [
        { name: 'Airmax', count: 48 },
        { name: 'Nike', count: 14 },
        { name: 'Adidas', count: 15 },
        { name: 'Vans', count: 23 },
        { name: 'All Stars', count: 1 },
        { name: 'Adidas', count: 95 },
      ],
      BRAND: [
        { name: 'Nike', count: 48 },
        { name: 'Siemens', count: 14 },
        { name: 'Adidas', count: 15 },
        { name: 'Vans', count: 23 },

      ],

      prices: [
        { name: 'Ranger', range: '$13.99 - $25.99' },
      ],
    };

  },


    }
</script>

<style lang="scss" scoped>
.routs {
    width:150
}
.link {
    color: black;
    &:hover {
        color: #40BFFF;
    }
}
.snekers {
    background-color: #40BFFF;
    height: 300px;
}
.snky {
    width: 10%;
}
.itemcard {
    &:hover{
        color: #40BFFF;
    }
    cursor: pointer;
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