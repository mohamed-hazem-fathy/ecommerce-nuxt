<template>
  <nav>
  <div class="navbar">
    <v-contaner >
      <v-row style="width: 80%; margin:0px auto; height:50px">
        <v-col cols="6">
          <span>EN <icondown /></span>
        <span>USD <icondown /></span>
        </v-col>
        <v-col cols="6">
          <div>
            <ul class="d-flex justify-space-between align-center " style="list-style:none; margin-top:-18px">
              <li><span><nuxt-link to="#" class="text-decoration-none text-white" >
                <div class="user-prof d-flex align-center">
                  <NuxtLink to="/">   <v-avatar class="">
                    <v-img class="" alt="John" src="/assets/imges/mohamedhazem.jpg"></v-img>
                  </v-avatar></NuxtLink>

                  <h3 style="color: black;" class="ml-3">Mohamed Hazem</h3>
                </div>
              </nuxt-link></span></li>
              <li><span><NuxtLink to="/cart"><cart /></NuxtLink></span></li>
              <li> <span>items</span></li>
              <li><span>$0.00 <searsh /></span></li>
            </ul>
          </div>
        </v-col>
      </v-row>
      <hr class="mt-1">
      <v-row style="width: 80%; margin:0px auto; height:50px;">
        <v-col cols="4">
          <div  class="logo d-flex align-center" style="gap: 10px;">
            <logo />
            E-Comm
          </div>
        </v-col>
        <v-col cols="8">
          <ul class="d-flex justify-space-between align-center mt-2"style="list-style:none;"><li> <v-menu offset-y>
            <template v-slot:activator="{ props }">
              <a style="cursor: pointer;" class="stylefontlink" v-bind="props">Home<v-icon icon="mdi-chevron-down"></v-icon></a>
            </template>
            <v-list class="d-flex">
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-title><nuxt-link to="/product">Corporate Shoes</nuxt-link></v-list-item-title>
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
                  <v-list-item-title><nuxt-link to="/"> HOT DEAL </nuxt-link></v-list-item-title>
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
          </v-menu></li>
            <li><nuxt-link   class="link" style="color: black;" to="/product"><a  class="stylefontlink">BAGS</a ></nuxt-link></li>
            <li><nuxt-link  style="color: black;" to="/product"><a  class="stylefontlink">SNEAKERS</a ></nuxt-link></li>
            <li><a class="stylefontlink" href="#">BELT</a></li>
            <li><nuxt-link class="link" style="color: black;" to="/contact"><a  class="stylefontlink">CONTACT</a ></nuxt-link></li>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">

        </v-col>
      </v-row>
    </v-contaner>

  </div>
</nav>




</template>

<script>
import icondown from "../icons/arrowdown";
import profile from "../icons/profile";
import cart from "../icons/cart";
import searsh from "../icons/sersh";
import logo from "../icons/logo";
import dropdown from"./dropdown.vue";

export default {
  name: 'navbar',
  components: { icondown, profile, cart, searsh, logo,dropdown },
  data () {
  return {
    homedropdown : [
      {
        title: 'Coporate Shoes',
        link: '#'
      },
      {
        title: 'Coporate Shoes',
        link: '#'
      },
      {
        title: 'HOT DEAL',
        link: '#'
      }
    ],
  }
}
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
.stylefontlink.active,
.stylefontlink:hover {

}
.stylefontlink {
  &:hover{
      color: #40BFFF;
  }
}

.stylefontlink.link:hover {
  color: #40BFFF;
}
</style >
