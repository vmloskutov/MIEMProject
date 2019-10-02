<template>
  <div class="dashboard-container">
    <MyDashboard />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MyDashboard from '@/components/Dashboard/MyDashboard.vue'

export default {
  name: 'Dashboard',
  components: {
    MyDashboard,
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
