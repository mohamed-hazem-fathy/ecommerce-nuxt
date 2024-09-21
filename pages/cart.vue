<template>
    <div>

        <myNav></myNav>

        <div class="mb-15" style="text-align:center; width: 100%; background-color:#F6F7F8 ">
            <v-btn style="background-color:#F6F7F8" :ripple="false" class="btn" rounded size="x-large"
            ><nuxt-link  style="color:#33A0FF;" class="link" to="/">H<span class="li">ome</span></nuxt-link
            ><v-icon icon="mdi-chevron-right"></v-icon
            ><span style="font-size:18px; color:#33A0FF;" class="text-button"><NuxtLink style="color:#33A0FF" to="/product">Hot Deal</NuxtLink></span>
            <v-icon icon="mdi-chevron-right"></v-icon>
            <span style="font-size:18px; color:black;" class="text-button">Nike Airmax 270 React</span>
        </v-btn>
            </div>


            <v-container>
                <v-row class="mb-15">


                    <v-col cols="12" sm="6">

                        <p>PRODUCT</p>
                        <hr class="mt-5 mb-5" color="#F6F7F8">
                        <br>
                        <div class="d-flex align-center position-absolute">
                            <v-icon style="color: red;">mdi-delete</v-icon>


                                <v-img class="mr-3 ml-5" style="height: 90px; width:150px" src="/assets/imges/Product Image.png"></v-img>

                                <p>Nike Airmax 270 react</p>



                        </div>

                    </v-col>






                    <v-col cols="12" sm="6">

                        <div class="title d-flex justify-lg-space-between">
                            <p>PRICE</p>
                            <p>QTY</p>
                            <p>UNIT PRICE</p>
                        </div>
                        <hr class="mt-5 mb-5" color="#F6F7F8">
                        <div class="title d-flex justify-lg-space-between" style="margin-top: 77px;">
                            <p>$998</p>

                            <div>
                                <v-btn @click="decrement" icon>
                                    <v-icon color="primary">mdi-minus</v-icon>
                                  </v-btn>
                                  <span class="mx-2">{{ quantity }}</span>
                                  <v-btn @click="increment" icon>
                                    <v-icon color="primary">mdi-plus</v-icon>
                                  </v-btn>
                               </div>

                            <p>$499</p>
                        </div>
                    </v-col>

                    <v-col cols="12" sm="6">


                        <hr class="mt-5 mb-5" color="#F6F7F8">
                        <br>
                        <div class="d-flex align-center position-absolute">
                            <v-icon style="color: red;">mdi-delete</v-icon>


                                <v-img class="mr-3 ml-5" style="height: 90px; width:150px" src="/assets/imges/Product Picture6.png"></v-img>

                                <p>Nike Airmax 270 react</p>



                        </div>

                    </v-col>




                    <v-col cols="12" sm="6">

                        <hr class="mt-5 mb-5" color="#F6F7F8">
                        <div class="title d-flex justify-lg-space-between" style="margin-top: 77px;">
                            <p>$998</p>

                            <div>
                                <v-btn @click="decrement" icon>
                                    <v-icon color="primary">mdi-minus</v-icon>
                                  </v-btn>
                                  <span class="mx-2">{{ quantity }}</span>
                                  <v-btn @click="increment" icon>
                                    <v-icon color="primary">mdi-plus</v-icon>
                                  </v-btn>
                               </div>

                            <p>$499</p>
                        </div>
                    </v-col>


                </v-row>

                <hr class="mt-5 mb-5" color="#F6F7F8">


                <v-row>

                    <v-col class="mt-15" cols="12" sm="8">
                        <div>
                            <input style="border: 1px solid #F1F3F4; height:45px; border-radius:6px" type="text" placeholder="  Voucher code">
                            <v-btn style="height: 45px; background-color:#33A0FF; color:white">Redeem</v-btn>
                        </div>
                    </v-col>

                    <v-col class="mt-15" cols="12" sm="4">
                        <div class="d-flex justify-lg-space-between mt-7">
                            <span style="font-size: 18px;">Subtotal</span>
                            <span style="font-size: 18px;">$998</span>
                        </div>
                        <div class="d-flex justify-lg-space-between mt-6">
                            <span style="font-size: 18px;">Shipping fee</span>
                            <span style="font-size: 18px;">$$20</span>
                        </div>


                        <div class="d-flex justify-lg-space-between mt-6">
                            <span style="font-size: 18px;">Coupon</span>
                            <span style="font-size: 18px;">No</span>
                        </div>
                        <hr class="mt-5 mb-5" color="#F6F7F8">

                        <div class="d-flex justify-lg-space-between">
                            <p style="color: #22262A; font-size:30px">TOTAL</p>
                            <P style="color: #22262A; font-size:30px">$118</P>
                        </div>
                        <v-btn class="mt-6" style=" color:white; background-color: #33A0FF; width:100%; height:50px">Check out</v-btn>






                    </v-col>
                </v-row>



            </v-container>













            
















            <div class="mt-15" style="background-color:#BCDDFE;">
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
                      <p>© 2024 Ecommerce theme by Mohamed Hazem</p>
                      <ul style="list-style:none">
                        <li><img src="/assets/imges/Brands.png" alt=""></li>
                      </ul>
                    </div>


                </v-container>

            </div>



    </div>
</template>

<script>
import myNav from "/components/global/nav";
    export default {
        data: () => ({
            quantity: 2,
        }),
        components:{myNav,},

    }
</script>

<style lang="scss" scoped>

</style>