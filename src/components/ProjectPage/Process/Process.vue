<template>
  <el-row class="process-row">
    <el-col :span="20" :offset="2" class="process-table">
      <el-row class="process-table">
        <el-col :span="12" class="process-table-main">
          <el-row class="process-table-row">
            <el-col :span="4" class="process-table-header">
              <img src="@/assets/trello-icon.svg">
            </el-col>
            <el-col :span="20" class="process-table-header">
              <span class="semibold">Trello</span> <a>{{ data_trello.link }}</a>
            </el-col>
          </el-row>
          <el-row class="process-table-row">
            <div class="last-updates semibold">Последние обновления</div>
          </el-row>
          <div v-for="(data, index) in data_trello.trello" class="">
            <el-row class="process-table-line">
              <div class="process-text">
                {{ data.update }}
              </div>
              <div class="process-time">
                {{ data.time }}
              </div>
            </el-row>
            <hr v-if="index !== data_trello.trello.length - 1">
          </div>
        </el-col>
        <el-col :span="12" class="process-table-main">
          <el-row class="process-table-row">
            <el-col :span="4" class="process-table-header">
              <img src="@/assets/gitlab-icon.svg">
            </el-col>
            <el-col :span="20" class="process-table-header">
              <span class="semibold">Gitlab</span> <a>{{ data_gitlab.link }}</a>
            </el-col>
          </el-row>
          <el-row class="process-table-row">
            <div class="last-updates semibold">Последние обновления</div>
          </el-row>
          <div v-for="(data, index) in data_gitlab.git" class="">
            <el-row class="process-table-line">
              <div class="process-text">
                {{ data.update }}
              </div>
              <div class="process-time">
                {{ data.time }}
              </div>
            </el-row>
            <hr v-if="index !== data_gitlab.git.length - 1">
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
  </el-col>
  </el-row>
</template>

<script>
import { getProcessTrelloInfo } from '@/api/process_trello'
import { getProcessGitlabInfo } from '@/api/process_gitlab'

export default {
  name: 'Process',
  data() {
    return {
      data_trello: null,
      data_gitlab: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getProcessTrelloInfo().then(response => {
        this.data_trello = response.data
      })
      getProcessGitlabInfo().then(response => {
        this.data_gitlab = response.data
      })
    }
  }
}

</script>

<style scoped lang="scss">
@import "style.scss";
</style>
