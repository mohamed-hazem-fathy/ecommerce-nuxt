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
  position: relative;
}
.img {
  background-image: url('/assets/imges/PromotionImage.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 800px; // الطول على الديسكتوب
  position: relative;

  @media (max-width: 768px) {
    // عند الموبايل، نعدل الصورة لتظهر كاملة
    background-size: contain; // تظهر الصورة كاملة
    background-repeat: no-repeat;
    height: 400px; // ارتفاع أصغر على الموبايل
    background-position: center center;
    background-image: url('/assets/imges/Promotion Image.png');
    top: -80px;

  }
}
h1 {
  position: absolute;
  top: 50%;
  font-size: 100px;
  margin-left: 30px;
  @media (max-width: 800px) {
    font-size: 24px; // نص أصغر على شاشات الموبايل
    top: 30%;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .img {
    background-size: contain;
    background-image: url('/assets/imges/Promotion Image.png');
    margin-top: 0;
  }
}



</style>