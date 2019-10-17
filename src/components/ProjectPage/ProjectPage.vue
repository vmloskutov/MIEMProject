<template>
  <div class="projectpage-container">

    <el-row class="project-label">
      <el-col :span="20" :offset="2">
        <div class="project-number">
          {{ data.number }}
        </div>
        <div class="project-titel-rus">
          {{ data.name_rus }}
        </div>
        <div class="project-titel-eng">
          {{ data.name_eng }}
        </div>
      </el-col>
    </el-row>

    <el-row class="information-label">
      <el-col :span="13" :offset="2">
        <div class="information-titel">
          Общая информация о проекте
        </div>
        <hr>
      </el-col>
    </el-row>
    <MainInformation />
    <el-row class="work-project-label">
      <el-col :span="13" :offset="2">
        <div class="work-project-titel semibold">
          Работа в проекте
        </div>
        <hr>
        <div class="work-project-titel-1 semibold">
          Свободные вакансии в проекте
        </div>
      </el-col>
    </el-row>
    <FreeVacancies />
    <el-row class="work-project-label">
      <el-col :span="13" :offset="2">
        <div class="work-project-titel-1 semibold">
          Студенты записанные в проект
        </div>
      </el-col>
    </el-row>
    <Students />
    <el-row class="work-project-label">
      <el-col :span="13" :offset="2">
        <div class="work-project-titel-1 semibold">
          Рабочий процесс
        </div>
      </el-col>
    </el-row>
    <Process />
    <el-row class="work-project-label">
      <el-col :span="13" :offset="2">
        <div class="work-project-titel semibold">
          Статистика
        </div>
        <hr>
      </el-col>
    </el-row>
    <StatisticsCard />
    <Statistics />
  </div>
</template>

<script>
import MainInformation from '@/components/ProjectPage/MainInformation/MainInformation.vue'
import FreeVacancies from '@/components/ProjectPage/FreeVacancies/FreeVacancies.vue'
import Students from '@/components/ProjectPage/Students/Students.vue'
import Process from '@/components/ProjectPage/Process/Process.vue'
import StatisticsCard from '@/components/ProjectPage/StatisticsCard/StatisticsCard.vue'
import Statistics from '@/components/ProjectPage/Statistics/Statistics.vue'

import { getProjectInfo } from '@/api/project'

export default {
  name: 'ProjectPage',
  components: {
    MainInformation,
    FreeVacancies,
    Students,
    Process,
    StatisticsCard,
    Statistics
  },
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
      getProjectInfo().then(response => {
        this.data = response.data
      })
    }
  }
}

</script>

<style scoped lang="scss">
@import "style.scss";
</style>
