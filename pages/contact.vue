<template>
    <div>
        <myNav></myNav>

        <div class="mb-15" style="text-align:center; width: 100%; background-color:#F6F7F8 ">

            <v-btn style="background-color:#F6F7F8" :ripple="false" class="btn" rounded size="x-large"
            ><nuxt-link  style="color:#33A0FF;" class="link" to="/">H<span class="li">ome</span></nuxt-link
            ><v-icon icon="mdi-chevron-right"></v-icon
            ><span style="color:black;" class="text-button">Contact Us</span></v-btn>

            </div>


            <v-container>

            <v-row>


                <v-col style="position:relative" cols="12" sm="6">
                    <v-img style="width: 100%;" src="/imges/Union.png"></v-img>
                    <v-img  style="width: 100%; position:absolute; top:5%; left:-90px" src="/imges/call 1.png"></v-img>
                    <div class="mt-10 ml-2" style="color:white; width: 50%; position:absolute; left:50%; top:10%;">
                        <p style="font-size: 40px;">get in<br>touch</p>
                        <br><br><br>

                        <span>contact@mh5725012@gmail.com</span>
                        <br><br>
                        <span>+201096856735</span>
                        <br><br>


                        <span>20 Prince Hakerem Lekki<br> Phase 1, Lagos</span>

                    </div>
                </v-col>




                <v-col style="box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;" cols="12" sm="6">

                    <div class="mt-15">
                        <label class="mt-15" for="FullName">FullName</label>
                        <input style=" height:50px; width:90%; border: 1px solid; border-color:#969393 ;" placeholder="  Your Name" type="text">


                        <label class="mt-9" style="display: block;"  for="Email">Email</label>
                        <input style=" height:50px; width:90%; border: 1px solid; border-color:#969393 ;" placeholder="  mh5725012@gmail.com" type="text">

                        <textarea class="mt-15" style="height:150px; width: 90%; border:1px solid #969393" placeholder="  Type your message"></textarea>
                    </div>
                    <div class="text-center mt-9">
                        <v-btn style="background-color:#40BFFF; color: white;">send</v-btn>
                    </div>



                </v-col>




            </v-row>

            </v-container>
            <br><br><br>
            <search class="mt-15"></search>















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
import myNav from "/components/global/nav";
import search from "/components/global/search";
import footer from "/components/global/footer";
    export default {
        components:{myNav,search,footer},

    }
</script>

<style lang="scss" scoped>

</style>