<template>
    <div class="search mb-15">
        <div style=" border: 1px solid #40BFFF; width: 50%; height:56px; margin: 15px auto; border-radius:4px" class="d-flex">
            <v-text-field

            v-model="searchQuery"
            label=" Search Her"
          ></v-text-field>
          <button style=" color:white; background-color:#40BFFF; width:72px; height:56px; border-radius:4px" type="search">search</button>
        </div>



    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" >
.search {
    
}
</style>