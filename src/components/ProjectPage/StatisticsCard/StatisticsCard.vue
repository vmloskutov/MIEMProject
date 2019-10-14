<template>
  <el-row class="statistics-row">
    <el-col :span="3" :offset="2" class="statistics-card">
      <div class="statistics-card-number semibold">
        12
      </div>
      <div class="statistics-card-text">
        Новых задач
      </div>
      <div class="statistics-card-img">
        <img src="@/assets/new-tasks.svg" />
      </div>
    </el-col>
    <el-col :span="3" :offset="1" class="statistics-card">
      <div class="statistics-card-number semibold">
        04
      </div>
      <div class="statistics-card-text">
        Задачи в работе
      </div>
      <div class="statistics-card-img">
        <img src="@/assets/in-work-tasks.svg" />
      </div>
    </el-col>
    <el-col :span="3" :offset="1" class="statistics-card">
      <div class="statistics-card-number semibold">
        03
      </div>
      <div class="statistics-card-text">
        Задачи отложены
      </div>
      <div class="statistics-card-img">
        <img src="@/assets/wait-tasks.svg" />
      </div>
    </el-col>
    <el-col :span="3" :offset="1" class="statistics-card">
      <div class="statistics-card-number semibold">
        10
      </div>
      <div class="statistics-card-text">
        Задач закрыто
      </div>
      <div class="statistics-card-img">
        <img src="@/assets/done-tasks.svg" />
      </div>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'StatisticsCard'
}

</script>

<style scoped lang="scss">
@import "style.scss";
</style>
