<template>
    <div>



        <v-container>
            <v-row>
                <v-col cols="2"></v-col>






                <v-col  cols="12" sm="8">




                    <div style="width: 90%; margin:50px auto; text-align:center ">
                        <v-img style="width: 120px; margin:0 auto;"  src="/assets/imges/Icon.png"></v-img>
                        <p class="mt-1" style="font-size: 16px; font-weight:bold; letter-spacing:1px">Let’s Get Started</p>
                        <span style="color:#9098B1; margin-top:5px">Create an new account</span>
                    </div>

                    <div style="width: 65%; margin:1% auto; text-align:center">
                        <div style="position:relative ;">
                            <input  style="border:1px solid #9098B1; width:90%; height:48px; margin:0 auto; border-radius:6px" type="text" placeholder="          Full Name">
                            <v-icon style="color: #9098B1; position: absolute; left: 40px; top:11px;" icon="mdi-account"></v-icon>
                        </div>

                        <div class="mt-4" style="position:relative ;">
                            <input  style="border:1px solid #9098B1; width:90%; height:48px; margin:0 auto; border-radius:6px" type="text" placeholder="          Email">
                            <v-icon style="color: #9098B1; position: absolute; left: 40px; top:11px;" icon="mdi-mail"></v-icon>
                        </div>
                        <div class="mt-4" style="position:relative ;">
                            <input  style="border:1px solid #9098B1; width:90%; height:48px; margin:0 auto; border-radius:6px" type="text" placeholder="          password">
                            <v-icon style="color: #9098B1; position: absolute; left: 40px; top:11px;" icon="mdi-password"></v-icon>
                        </div>
                        <div class="mt-4" style="position:relative ;">
                            <input  style="border:1px solid #9098B1; width:90%; height:48px; margin:0 auto; border-radius:6px" type="text" placeholder="          Password Again">
                            <v-icon style="color: #9098B1; position: absolute; left: 40px; top:11px;" icon="mdi-password"></v-icon>
                        </div>

                        <v-btn class="mt-5" style="color:white; background-color:#40BFFF; width:90%; height:57px">
                            Sign Up
                        </v-btn>
                        <br>
                        <br>
                        <div style="position: relative;"> <span class="or">or</span></div>

                        <v-btn class="mt-5" style=" color:#9098B1; border:1px solid #EBF0FF; border-radius:5px;  width:90%; height:57px">
                         <a href="#"><v-icon style="color: #9098B1; position: absolute; left: 40px; top:7px;" icon="mdile-google"></v-icon></a>
                            Login with Google

                        </v-btn>

                        <v-btn class="mt-5" style=" color:#9098B1;  border:1px solid #EBF0FF; border-radius:5px;  width:90%; height:57px">
                            <a href="#"><v-icon style=" position: absolute; left: 40px; top:7px;" icon="mdile-facebook"></v-icon></a>
                               Login with facebook

                           </v-btn>

                           <p class="mt-5">Don’t have a account? <a href="" style="color: #40BFFF;">Register</a></p>

                    </div>





                </v-col>











                <v-col cols="2"></v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script setup>
// definePageMeta({
//   middleware: ["auth"],
// });

// const FirebaseUser  = useFirebaseUser();
</script>


<style lang="scss" scoped>

.or::before {
    content: "";
    width: 200px;
    position: absolute;
    background-color: gray;
    height: 1px;
    left: 29px;
    top: 12px;

}
.or::after {
    content: "";
    width: 200px;
    position: absolute;
    background-color: gray;
    height: 1px;
    right: 29px;
    top:12px;

}

</style>