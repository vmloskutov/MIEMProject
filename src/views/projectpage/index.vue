<template>
  <div class="projectpage-container">
    <MyProjectPage />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MyProjectPage from '@/components/ProjectPage/ProjectPage.vue'

export default {
  name: 'ProjectPage',
  components: {
    MyProjectPage
  },
  mounted() {
    document.querySelector(".app-main").style.backgroundColor = "#F5F7FA"
  },
  beforeDestroy() {
    document.querySelector(".app-main").style.backgroundColor = "#fff"
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 0px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
