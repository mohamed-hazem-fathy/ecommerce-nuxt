<template>
  <div class="mynav">
    <v-container class="d-flex align-center justify-space-between">
      <div class="language">
        <span>EN <icondown /></span>
        <span>USD <icondown /></span>
      </div>
      <div class="icontop d-flex align-center" style="gap: 30px">
        <span><profile />My profile</span>
        <span><cart /></span>
        <span>items</span>
        <span>$0.00 <searsh /></span>
      </div>
    </v-container>
    <hr />
    <v-container class="d-flex align-center justify-space-between">
      <div class="logo d-flex align-center" style="gap: 10px">
        <logo />
        E-Comm
      </div>
      <div class="link">
        <ul
          class="d-flex justify-space-between"
          style="list-style: none; gap: 150px"
        >
          <li><a href="#">HOME</a></li>
          <li><a href="#">BAGS</a></li>
          <li><a href="#">SNEAKERS</a></li>
          <li><a href="#">BELT</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>
    </v-container>
  </div>
</template>

<script>
import icondown from "../icons/arrowdown";
import profile from "../icons/profile";
import cart from "../icons/cart";
import searsh from "../icons/sersh";
import logo from "../icons/logo";
export default {
  components: { icondown, profile, cart, searsh, logo },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  font-weight: 500;
}
</style>
