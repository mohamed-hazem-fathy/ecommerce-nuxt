<!-- <template>
   <header>
    <nav>
        <div>
            <div class="mynav">
          <v-container fluid style="max-height: 70px;" class="d-flex align-center justify-space-between">
            <div style="margin-left:10px;" class="language">
              <span>EN <icondown /></span>
              <span>USD <icondown /></span>
            </div>
            <div class="icontop d-flex align-center" style="gap: 30px">
              <span><profile class="profile" />My profile</span>
              <span><cart /></span>
              <span>items</span>
              <span>$0.00 <searsh /></span>
            </div>
          </v-container>
          <hr />
          <v-container fluid style="max-height: 70px;" class="d-flex align-center justify-space-between">

            <div  class="logo d-flex align-center" style="gap: 10px; margin-left:10px;">
              <logo />
              E-Comm
            </div>
            <v-row>
              <v-col cols="12" sm="4" >

              </v-col>
            </v-row>
            <div class="link">
              <ul
                class="d-flex justify-space-between"
                style="list-style: none; gap: 150px"
              >
                <li><a class="stylefontlink" href="#">HOME</a></li>
                <li><a class="stylefontlink" href="#">BAGS</a></li>
                <li><a class="stylefontlink" href="#">SNEAKERS</a></li>
                <li><a class="stylefontlink" href="#">BELT</a></li>
                <li><a class="stylefontlink" href="#">CONTACT</a></li>
              </ul>
            </div>
          </v-container>
        </div>
              <slot />


          </div>
    </nav>
   </header>
</template>

<script>
import navbar  from '../components/global/nav.vue'
import footer  from '../components/global/footer.vue'
    export default {
        components : {navbar , footer}

    }
</script>

<style lang="scss" scoped>

</style> -->
<template>
  <div>
    <myNav />
    <!-- <NavforLoged/> -->
    <slot />
    <footer />
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" >



</style>