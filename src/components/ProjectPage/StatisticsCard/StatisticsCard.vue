<template>
  <el-row class="statistics-row">
    <el-col :span="3" :offset="2" class="statistics-card">
      <div class="statistics-card-number semibold">
        {{ data[0].number }}
      </div>
      <div class="statistics-card-text">
        {{ data[0].status }}
      </div>
      <div class="statistics-card-img">
        <img src="@/assets/new-tasks.svg">
      </div>
    </el-col>
    <el-col :span="3" :offset="1" class="statistics-card">
      <div class="statistics-card-number semibold">
        {{ data[1].number }}
      </div>
      <div class="statistics-card-text">
        {{ data[1].status }}
      </div>
      <div class="statistics-card-img">
        <img src="@/assets/in-work-tasks.svg">
      </div>
    </el-col>
    <el-col :span="3" :offset="1" class="statistics-card">
      <div class="statistics-card-number semibold">
        {{ data[2].number }}
      </div>
      <div class="statistics-card-text">
        {{ data[2].status }}
      </div>
      <div class="statistics-card-img">
        <img src="@/assets/wait-tasks.svg">
      </div>
    </el-col>
    <el-col :span="3" :offset="1" class="statistics-card">
      <div class="statistics-card-number semibold">
        {{ data[3].number}}
      </div>
      <div class="statistics-card-text">
        {{ data[3].status }}
      </div>
      <div class="statistics-card-img">
        <img src="@/assets/done-tasks.svg">
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getStatisticksCardInfo } from '@/api/statisticks_card'

export default {
  name: 'StatisticsCard',
  data() {
    return {
      data: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getStatisticksCardInfo().then(response => {
        this.data = response.data
      })
    }
  }
}

</script>

<style scoped lang="scss">
@import "style.scss";
</style>
