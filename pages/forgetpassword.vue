<template>
    <div>




        <v-container>
            <v-row>
                <v-col cols="2"></v-col>






                <v-col  cols="12" sm="8">




                    <div style="width: 90%; margin:50px auto; text-align:center ">
                        <v-img style="width: 120px; margin:0 auto;"  src="/imges/Icon.png"></v-img>
                        <p class="mt-1" style="font-size: 16px; font-weight:bold; letter-spacing:1px">Welcome to E-com</p>
                        <span style="color:#9098B1; margin-top:5px">Reset Password By Email</span>
                    </div>

                    <div style="width: 65%; margin:1% auto; text-align:center">
                        <v-form>

                            <div style="position:relative ;">
                                <input id="email-input"  style="border:1px solid #9098B1; width:90%; height:48px; margin:0 auto; border-radius:6px" type="text" placeholder="          Your email">
                                <v-icon style="color: #9098B1; position: absolute; left: 40px; top:11px;" icon="mdi-mail"></v-icon>
                            </div>

                            <v-btn type="submit" class="mt-5" style="color:white; background-color:#40BFFF; width:90%; height:57px">
                               send
                            </v-btn>

                        </v-form>

                        <br>
                        <br>
                    </div>
                </v-col>











                <v-col cols="2"></v-col>







            </v-row>
        </v-container>


    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>