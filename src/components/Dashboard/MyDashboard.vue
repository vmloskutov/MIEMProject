<template>
  <div class="dashboard">
    <el-row class="first-row">
      <el-col :span="24">
        <div class="header">
          <DashboardHeader />
        </div>
      </el-col>
    </el-row>
    <hr>
    <el-row class="second-row">
      <el-col  :xl="6" :lg="6" :md="8">
        <div class="calendar">
          <DashboardCalendar />
        </div>
      </el-col>
      <el-col :xl="14" :lg="14" :md="16">
        <div class="main">
          <el-row>
            <el-col :span="24">
              <div class="intro">
                <DashboardIntro />
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="classroom">
                <DashboardClassroom />
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="lms">
                <DashboardLMS />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :xl="4" :lg="4" :md="0" :sm="0">
        <div class="chat">

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DashboardIntro from '@/components/Dashboard/DashboardIntro/DashboardIntro.vue'
import DashboardHeader from '@/components/Dashboard/DashboardHeader/DashboardHeader.vue'
import DashboardClassroom from '@/components/Dashboard/DashboardClassroom/DashboardClassroom.vue'
import DashboardLMS from '@/components/Dashboard/DashboardLMS/DashboardLMS.vue'
import DashboardCalendar from '@/components/Dashboard/DashboardCalendar/DashboardCalendar.vue'

export default {
  name: 'Dashboard',
  components: {
    DashboardIntro,
    DashboardHeader,
    DashboardClassroom,
    DashboardLMS,
    DashboardCalendar,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .dashboard {
    background-color: #E5E5E5;

    .second-row {
      margin-top: 5px;
    }
  }

  .header {

    height: 10%;
  }

  .calendar {
    height: 90%;
  }

  .main {
  }

  .chat {

    height: 90%;
  }

  .intro {
    border-radius: 15px;
    height: 18vh;
    background-color: #F7BDE1;
    background-image: url("../../assets/intro.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
  }

  .classroom {
    height: 29%;
  }

  .lms {
    height: 43%;
  }
</style>
