<template>
    <div class="sneakers">
        <v-container fulid>
            <v-row>
                <v-col style="position: relative;" cols="12" sm="6" >
                    <div style="position: absolute; top:200px">
                        <div class="title"><h2 style="color: white; padding:10px; font-size:40px; font-weight:100;">Adidas Men Running
                            <br>Sneakers</h2></div>
                        <div class="subtitle">
                            <p style="color: white; padding:10px; font-size:20px; opacity:.9">Performance and design. Taken right to the edge.</p>
                        </div>
                        <v-btn
                        class=" mt-6 shop-now-button transparent-button"
                        @click="handleShopNow"
                      >
                        Shop Now
                        <span class="border"></span> <!-- عنصر الحدود -->
                      </v-btn>
                    </div>

                </v-col>
                <v-col cols="12" sm="6">
                    <div style="position: relative;">
                        <img class="sneake" style="position: absolute; top:-109px; right:-104px " src="/imges/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png" alt="">
                    </div>

                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

.sneakers {
    height: 600px;
    background-color: #40BFFF;
    width: 100%;
}
.sneake {
    @media (max-width: 800px) {
        position: absolute;
        top: -97px;
        right: -61px !important;
        width: 382px !important;
    }

}


.transparent-button {
    background-color: transparent; /* خلفية شفافة */
    color: white; /* نص باللون الأزرق */
    border-bottom: 1px solid #40BFFF; /* يمكنك إضافة حد أزرق إذا كنت تريد */
  }
</style>