<template>
  <el-row class="statistics-row">
    <el-col :span="20" :offset="2" class="statistics-card">
      <el-col :span="16" :offset="1" class="statistics-chart">
        <div class="statistics-title semibold">
          Статистика накопленных часов
        </div>
        <div class="statistics-period">
          Период: с 1 по 31 октября
        </div>
        <highcharts class="chart month" :options="chartOptions" />
        <div class="buttons">
          <el-radio v-model="radio" label="1" @change="chartChange">По месяцам</el-radio>
          <el-radio v-model="radio" label="2" @change="chartChange">По циклам</el-radio>
        </div>
      </el-col>
      <el-col :span="6" :offset="1" class="statistics-hours">
        <el-row>
          <div class="statistics-hours-title">
            Всего потрачено
          </div>
          <div class="statistics-hours-number semibold">
            46 часов
          </div>
        </el-row>
        <hr>
        <el-row>
          <div class="statistics-hours-title">
            За указанный период потрачено
          </div>
          <div class="statistics-hours-number semibold">
            30 часов
          </div>
        </el-row>
        <hr>
        <el-row>
          <div class="statistics-hours-title">
            Вклад участников за всё время
          </div>
          <div class="statistics-hours-number semibold">
            Дарья - 27 часов<br>
            Петр - 19 часов
          </div>
        </el-row>
        <hr>
        <el-row>
          <div class="statistics-hours-title">
            Вклад участников за указанный период
          </div>
          <div class="statistics-hours-number semibold">
            Дарья - 18 часов<br>
            Петр - 12 часов
          </div>
        </el-row>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'Statistics',
  data() {
    return {
      radio: '1',
      chartOptions: {
        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        yAxis: {
          opposite: true,
          title: {
            enabled: false
          },
          labels: {
            y: -10,
            x: -10
          }
        },
        legend: {
          enabled: true,
          verticalAlign: 'top',
          align: 'right',
          y: -5,
          x: -30
        },
        xAxis: {
          categories: ['1.10', '07.10', '14.10', '21.10', '28.10']
        },
        series: [{
          type: 'column',
          name: 'Петр',
          color: '#0486FE',
          pointWidth: 20,
          data: [3, 2, 1, 3, 4]
        }, {
          type: 'column',
          name: 'Дарья',
          color: '#FF3D00',
          pointWidth: 20,
          data: [4, 3, 3, 9, 0]
        }, {
          type: 'spline',
          name: 'Среднее',
          color: '#00C54F',
          data: [3.5, 2.5, 2, 6, 2],
          marker: {
            lineWidth: 2,
            lineColor: '#00C54F',
            fillColor: 'white'
          }
        }
        ]
      }
    }
  },
  methods: {
    chartChange: function() {
      const chart = this.chartOptions
      if (this.radio === '1') {
        chart.xAxis.categories = ['1.10', '07.10', '14.10', '21.10', '28.10']
        chart.series[0].data = [3, 2, 1, 3, 4]
        chart.series[1].data = [4, 3, 3, 9, 0]
        chart.series[2].data = [3.5, 2.5, 2, 6, 2]
      }
      if (this.radio === '2') {
        chart.xAxis.categories = ['2 цикл', '3 цикл', '4 цикл', '5 цикл', '6 цикл']
        chart.series[0].data = [20, 22, 15, 30, 14]
        chart.series[1].data = [24, 23, 13, 29, 10]
        chart.series[2].data = [22, 22.5, 14, 29.5, 12]
      }
    }
  }
}

</script>

<style scoped lang="scss">
@import "style.scss";
</style>
