
<template>
  <div id="vcom-calendar" class="vcom-calendar">
    <div class="header">
      <div class="head">
        {{ currentDay }} - {{ month }} - {{ year }}
      </div>
      <div class="weeks">
        <span v-for="week in weeks" class="week">
          {{ week }}
        </span>
      </div>
    </div>
    <div class="days">
      <span v-for="day in days" class="day" track-by="$index">
        <span v-if="day.isToday" class="today" :data-month="day.year - day.month - day.day ">
          {{ day.day }}
        </span>
        <span v-if="day.isPreMonth || day.isNextMonth" class="not-this-month" :data-month=" day.year - day.month - day.day ">
          {{ day.day }}
        </span>
        <span v-if="day.isThisMonthDay && !day.isToday" class="this-month-day" :data-month=" day.year - day.month - day.day ">
          {{ day.day }}
        </span>
      </span>
    </div>
    <!-- <div class="input-group">
      <select name="year" id="year">
        <option value="{{ year }}" v-for="year in selectYears">{{ year }}</option>
      </select>
      <select name="month" id="month">
        <option value="{{ month }}" v-for="month in selectMonths">{{ month }}</option>
      </select>
    </div> -->
  </div>
</template>

<script>
const MATRIX_MAX = 7 * 6
const WEEKS = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
const bMonthRe = /^1?$|3|5|7|8|10|12/
export default {
  data() {
    return {
      'time': new Date(),
      'weeks': WEEKS
    }
  },
  computed: {
    isRunYear() {
      return ((this.year % 4 === 0) && (this.year % 100 !== 0))
    },
    selectYears() {
      return this._getRangeList(2099, 1900)
    },
    selectMonths() {
      return this._getRangeList(12)
    },
    dayData() {
      return [
        this.year,
        this.month,
        this.currentDay
      ].join('-')
    },
    firstDayWeek() {
      return new Date(
        this.year
        , this.month - 1
        , 1
      )
        .getDay()
    },
    year() {
      return this.time.getFullYear()
    },
    month() {
      return this.time.getMonth() + 1
    },
    days() {
      return this.getDaysList()
    },
    currentDay() {
      return this.time.getDate()
    }
  },
  events: {
  },
  methods: {
    _getPreMonthDays(month, offset) {
      if (offset === 0) {
        return []
      } else if (month === 1) {
        return this.getDays(12).slice(-offset)
      } else {
        return this.getDays(month - 1).slice(-offset)
      }
    },
    _getNextMonthDays(month, offset) {
      if (month === 12) {
        return this.getDays(1).slice(0, offset)
      } else {
        return this.getDays(month + 1).slice(0, offset)
      }
    },
    _getRangeList(range, start) {
      var i = start || 1; var _list = []
      for (;i <= range; i++) {
        _list.push(i)
      }
      return _list
    },
    getDays(month) {
      if (bMonthRe.test(month)) {
        return this._getRangeList(31)
      } else if (month === 2) {
        if (this.isRunYear) {
          return this._getRangeList(29)
        } else {
          return this._getRangeList(28)
        }
      } else {
        return this._getRangeList(30)
      }
    },
    getDaysList() {
      const _needConcatLength = this.getDays(this.month).length + this.firstDayWeek
      // debugger;
      const _initList = this._getPreMonthDays(this.month, this.firstDayWeek)
        .map((preMonthday) => {
          return {
            'year': this.month === 1 ? this.year - 1 : this.year,
            'month': this.month === 1 ? 12 : this.month - 1,
            'day': preMonthday,
            'isPreMonth': true
          }
        })
      if (MATRIX_MAX <= _needConcatLength) {
        // 如果日历矩阵长度小于_needConcatLength
        const _thisMonthDaysList = this.getDays(this.month).slice(
          0
          , this.getDays(this.month).length - (_needConcatLength - MATRIX_MAX)
        )
        return _initList
          .concat(_thisMonthDaysList.map((day) => {
            const _dateObj = {
              'year': this.year,
              'month': this.month,
              'isThisMonthDay': true,
              'day': day
            }
            if (day === this.currentDay) {
              _dateObj.isToday = true
            }
            return _dateObj
          }))
      } else {
        return _initList
          .concat(this.getDays(this.month).map((day) => {
            const _dateObj = {
              'year': this.year,
              'month': this.month,
              'isThisMonthDay': true,
              'day': day
            }
            if (day === this.currentDay) {
              _dateObj.isToday = true
            }
            return _dateObj
          }))
          .concat(
            this._getNextMonthDays(
              this.month
              , MATRIX_MAX - _needConcatLength
            ).map((nextMonthDay) => {
              return {
                'year': this.month === 12 ? this.year + 1 : this.year,
                'month': this.month === 12 ? 1 : this.month + 1,
                'day': nextMonthDay,
                'isNextMonth': true
              }
            })
          )
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "style.scss";
</style>
