<template>
    <div class="header" style="padding: 5px;">
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
.header {
  top: 0px;

}
.img {

  background-size: cover;
  background-position: center;
  width: 100%;
  height: 800px; // الطول على الديسكتوب
  position: relative;

  @media (max-width: 800px) {
    background-size: contain;
    border-radius: 4px;
    background-repeat: no-repeat;
    height: 350px;
    background-position: center center;
    background-image: url('/assets/imges/Promotion Image.png');
    top:0px;
  }
  @media (min-width:1024px) {
    background-image: url('/assets/imges/PromotionImage.png');
   
  }
}
h1 {
  position: absolute;
  top: 50%;
  font-size: 100px;
  margin-left: 70px;
  @media (max-width: 800px) {
    font-size: 24px; // نص أصغر على شاشات الموبايل
    top: 30%;
  }
}
@media (min-width: 800px) and (max-width: 1024px) {
  .img {
    background-size: contain;
    background-image: url('/assets/imges/Promotion Image.png');
   top: -115px;
  }

  h1 {
    position: absolute;
    top: 30%;
    font-size:50px;
    margin-left: 30px;

  }
}



</style>