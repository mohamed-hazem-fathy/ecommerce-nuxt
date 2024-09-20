<template>
    <div>
        <div class="img">
            <v-container>
              <h1 style="color: white">Super Flash Sale <br />50% Off</h1>
            </v-container>
          </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" >
.img {
    background-image: url(../../assets/imges/PromotionImage.png);
    background-size: cover;
    width: 100%;
    height: 800px;
    position: relative;
    background-position: center bottom;
  }
  h1 {
    position: absolute;
    top: 50%;
    font-size: 100px;
    margin-left: -70px;
  }
</style>