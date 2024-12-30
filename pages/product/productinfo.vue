<template>
    <div>
        <myNav></myNav>
        <div class="mb-15" style="text-align:center; width: 100%; background-color:#F6F7F8 ">

            <v-btn style="background-color:#F6F7F8" :ripple="false" class="btn" rounded size="x-large"
            ><nuxt-link  style="color:#33A0FF;" class="link" to="/">H<span class="li">ome</span></nuxt-link
            ><v-icon icon="mdi-chevron-right"></v-icon
            ><nuxt-link   to="/product" class="text-button"><span style="color:#33A0FF;">Hoot Deal</span></nuxt-link><v-icon icon="mdi-chevron-right"></v-icon>
                <nuxt-link to="/product/productinfo"><span style="color:black;">Nike Airmax 270 React</span></nuxt-link>
        </v-btn>
         </div>


         <v-container>
            <v-row>

                <v-col cols="12" sm="9">
                    <v-row>



                        <v-col cols="4">
                            <img style="width: 100%;" src="/imges/image Product (2).png" alt="">

                            <img style=" width:100%; margin-top:120px" class="" src="/imges/Product Picturezx.png" alt="">
                        </v-col>



                        <v-col cols="8">
                            <p style="font-size: 24px;">Nike Airmax 270 React</p>
                            <div class="mt-3 ">
                                <span>
                                    <v-rating
                                    readonly
                                    :length="5"
                                    :size="16"
                                    :model-value="4"
                                    color="warning"
                                    active-color="warning"
                                   />
                                </span>
                                <span style="margin:10px;">0 reviews</span>
                                <a href="#">Submit a review</a>
                            </div>

                            <hr color="#E5E8EA" class="mt-5 mb-5">

                            <div class="d-flex align-center mt-5 mb-2">
                                <span style="font-size: 20px; color: #40BFFF; font-weight:bold;">$<span style="font-size:20px;">2</span>99,43</span>
                                <span style=" margin:0 10px;color:black; text-decoration: line-through; font-size:14px">$534,33</span>
                                <span style="color: red; font-size:14px; font-Weight:bold"> 24% Off</span>
                              </div>
                              <div class="d-flex mt-5">
                                <span style="font-size: 14px;">Availability:</span>
                                <span  style="font-size: 14px; margin:0 40px">In stock</span>
                              </div>
                              <div class="d-flex mt-5 mb-3">
                                <span style="font-size: 14px;">Category:</span>
                                <span  style="font-size: 14px; margin:0 40px">Accessories</span>
                              </div>
                              <span class="mt-2 ">Free shipping</span>
                              <br>


                              <hr color="#E5E8EA" class="mt-5 mb-5">







                              <div class="d-flex">
                                <span>Select Color:</span>
                                <img style="margin: 0 20px;" src="/imges/colors.png" alt="">
                              </div>
                              <div class="d-flex mt-5">
                                <span>Size:</span>

                                <div class="text-center" style="margin: 0 75px">
                                    <v-menu>
                                      <template v-slot:activator="{ props: menu }">
                                        <v-tooltip location="top">
                                          <template v-slot:activator="{ props: tooltip }">
                                            <v-btn
                                              color="primary"
                                              v-bind="mergeProps(menu, tooltip)"
                                            >xl
                                            </v-btn>
                                          </template>
                                          <span> xl </span>
                                        </v-tooltip>
                                      </template>
                                      <v-list>
                                        <v-list-item
                                          v-for="(item, index) in items"
                                          :key="index"
                                        >
                                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                                        </v-list-item>
                                      </v-list>
                                    </v-menu>
                                  </div>
                              </div>

                              <hr color="#E5E8EA" class="mt-5 mb-5" >

                             <div class="d-flex justify-lg-space-between align-center">
                               <div>
                                <v-btn @click="decrement" icon>
                                    <v-icon color="primary">mdi-minus</v-icon>
                                  </v-btn>
                                  <span class="mx-2">{{ quantity }}</span>
                                  <v-btn @click="increment" icon>
                                    <v-icon color="primary">mdi-plus</v-icon>
                                  </v-btn>
                               </div>
                                  <div>
                                    <v-btn class="mr-5">
                                        <v-icon color="primary">mdi-cart</v-icon>
                                        Add To Cart
                                    </v-btn>
                                    <v-btn>
                                        <v-icon color="primary">mdi-heart</v-icon>

                                    </v-btn>

                                  </div>

                             </div>

                             <hr color="#E5E8EA" class="mt-5 mb-5">

                             <div style="margin:0px auto; width:80%;" class="d-flex align-center">
                                <v-btn style="background-color:#03A9F4 ;">
                                    <v-icon color="white">mdi-facebook</v-icon>
                                    Share on Facebook
                                </v-btn>
                                <v-spacer></v-spacer>

                                <v-btn style="margin-right:12px; background-color:#03A9F4 ;">
                                    <v-icon color="white">mdi-twitter</v-icon>
                                    Share on Twitter</v-btn>
                             </div>





                        </v-col>
                    </v-row>
                    <v-row class="mt-10" style="background-color: #FAFAFB;border-radius :6px">
                    <v-col style="" cols="12">
                        <div style="width: 90%; margin:0px auto" class="d-flex mt-9  ">
                            <p>Product Infomation</p>
                            <p style="margin:0 150px">Reviews <span style="color: #262626;">0</span></p>
                            <p>Another tab</p>
                        </div>
                        <hr class="mt-5 mb-5" color="#E5E8EA">
                        <div style="width: 90%; margin:0px auto">

                        <p style="color: #9098B1;">air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                        <br>
                        <p style="color: #9098B1;">air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                        <br>
                        <p style="color: #9098B1;">air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                        </div>
                    </v-col>
                 </v-row>


                </v-col>






                <v-col cols="3">
                    <p class="mb-8" style="color: #C1C8CE;">BEST SELLER</p>
                    <template>
                    <v-card
                      class="mx-auto"
                      max-width="400"
                    >
                      <v-img
                        class="align-end text-white team-item"
                        height="250"
                        src="/imges/Product Picture6.png"
                        cover
                      >
                      </v-img>
                      <div style="" class="text-center">
                        <v-rating
                        :size="30"
                        color="yellow"
                          v-model="rating"
                          readonly
                        ></v-rating>
                      </div>

                      <div class="d-flex justify-lg-space-evenly align-center mb-5">
                        <span style="color: red; font-size:14px"> $499</span>
                        <span style="color:black; text-decoration: line-through; font-size:14px">$599</span>

                      </div>

                    </v-card>
                  </template>


                  <v-pagination
                  v-model="page"
                  :length="totalPages"
                  :total-visible="7"
                  circle
                  color="primary"
                  class="pagination mt-3"
                  @input="fetchData"
                ></v-pagination>



                </v-col>





            </v-row>



            <v-row class="mb-15">
             <v-col>
                <div style="text-align: center;">
                    <h2 class="mb-8 mt-8" style="text-align: center; font-size:40px;">BEST SELLER</h2>
                  <div  class="d-flex">
                    <v-col cols="12" sm="3">
                        <template>
                            <v-card
                              class="mx-auto"
                              max-width="400"
                            >
                              <v-img
                                class="align-end text-white team-item"
                                height="250"
                                src="/imges/image Product (2).png"
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
                                src="/imges/image Product3.png"
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
                                src="/imges/Product Picture5.png"
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
                                src="/imges/image Product.png"
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

                  </div>
                </div>
             </v-col>










            </v-row>
         </v-container>






         <div class="" style="background-color:#BCDDFE;">
            <v-container>
                <v-row class="mt-15 mb-15">
                    <v-col cols="12" sm="4">
                   <div class="d-flex">
                    <img style=" border-radius:45%; height:50px; width: 50px;" src="/imges/ico5.png"></img>
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
                        <li><img  src="/imges/facebook.png" alt=""></li>
                        <li><img class="ml-15" src="/imges/twitter.png" alt=""></li>
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
                  <p>© 2024 Ecommerce theme by Mohamed Hazem</p>
                  <ul style="list-style:none">
                    <li><img src="/imges/Brands.png" alt=""></li>
                  </ul>
                </div>


            </v-container>

        </div>






    </div>
</template>

<script>
 import { mergeProps } from 'vue'
import myNav from "/components/global/nav";
    export default {
        data: () => ({
            quantity: 2,
      items: [
        { title: 'sm' },
        { title: 'xl' },
        { title: 'm' },
        { title: 'xs' },
      ],
    }),
    methods: {
      mergeProps,
    },
        components:{myNav,},
    }
</script>

<style lang="scss" scoped>

.pagnation {
    width: 70px;
    height: 5px;
    margin-left: 1%px;
    background-color: #F1F3F4;



}
.pagnation1 {
    width: 70px;
    height: 5px;
    margin-left: 1%px;
    background-color: #F1F3F4;



}

</style>