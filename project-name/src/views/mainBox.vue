<template>
    <div class="everyBox">
        <topBox></topBox>
        <div class="main-Box">

            <happy-scroll color="rgba(0,0,0,0.5)" size="0" resize>
                <router-view></router-view>
            </happy-scroll>

        </div>
        <footsBox></footsBox>
    </div>
</template>

<script>

import topBox from "@/views/topBox.vue";
import footsBox from "@/views/footsBox.vue";
export default {
  components: {
    footsBox,
    topBox
  }
};
</script>

<style scoped>
    .everyBox{
        margin-left: 300px;
    }
.main-Box {

  height: 480px;
  width: 500px;

  padding-top: 0;
  padding-bottom: 0;
  z-index: 0;
}
</style>
