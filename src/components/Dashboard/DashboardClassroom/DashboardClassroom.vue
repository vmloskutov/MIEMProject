<template>
  <el-row class="classroom-block">
    <el-col :span="8" class="subject" v-for="item in data">
      <div class="card">
        <header :class="item.header">
          <div class="subject-label">
            {{item.titel}}
            <div class="teacher">
              {{item.teacher}}
            </div>
          </div>
        </header>
        <main>
          {{item.message}}
        </main>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getClassroomInfo } from '@/api/classroom'

export default {
  name: 'DashboardClassroom',
  data() {
    return {
      data: null,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getClassroomInfo().then(response => {
        this.data = response.data;
      })
    }
  }
}

</script>

<style scoped lang="scss">
@import "style.scss";
</style>
