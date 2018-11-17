<template>
    <div class="main-Box">
        <happy-scroll color="rgba(0,0,0,0.5)" size="0">
<router-view></router-view>
        </happy-scroll>
    </div>
</template>

<script>
export default {
  name: "mainBox"
};
</script>

<style scoped>
.main-Box {
  margin-left: -1px;
  height: 480px;
  width: 500px;

  padding-top: 0;
  padding-bottom: 0;
  z-index: 0;
}
</style>
