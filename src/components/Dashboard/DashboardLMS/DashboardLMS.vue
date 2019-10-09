<template>
  <div class="lms-block">
    <header>
      <div class="label">Дисциплины</div>
    </header>
    <hr>
    <main>
      <div class="year">
        <div class="label">
          <img id="year" class="array" src="../../../assets/chevron-up-solid.svg" @click="openMenu1()">
          2019/2020 учебный год
        </div>
        <div class="dropdownYear">
          <template  v-for="items in data">
            <div class="university-disciplines">
              <div class="label">
                <img :id="items.id" class="array" src="../../../assets/chevron-up-solid.svg" @click="openMenu2($event)">
                {{items.titel}}
              </div>
              <div :class="items.class">
                <div
                  v-for="item in items.subjects"
                  class="disciplines"
                >
                  {{item}}
                </div>
              </div>
            </div>
          </template>
          <!-- <div class="specialized-disciplines">
            <div class="label">
              <img id="specdisc" class="array" src="../../../assets/chevron-up-solid.svg" @click="openMenu3()">
              Профильные дисциплины
            </div>
            <div class="specdisciplines">
              <div
                v-for="tspecDiscipl in tspecDiscipls"
                :key="tspecDiscipl"
                class="disciplines"
              >
                {{ tspecDiscipl }}
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { getLMSInfo } from '@/api/lms'


export default {
  name: 'DashboardLMS',
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
      getLMSInfo().then(response => {
        this.data = response.data;
      })
    },
    openMenu1() {
      const dropdown = document.querySelector('.dropdownYear')
      const array = document.querySelector('#year')
      if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block'
        array.style.transform = 'rotate(0deg)'
      } else {
        dropdown.style.display = 'none'
        array.style.transform = 'rotate(180deg)'
      }
    },
    openMenu2: function($event) {
      if ($event.target.id === 'unidisc') {
        const dropdown = document.querySelector('.unidisciplines')
        const array = document.querySelector('#unidisc')
        if (dropdown.style.display === 'none') {
          dropdown.style.display = 'block'
          array.style.transform = 'rotate(0deg)'
        } else {
          dropdown.style.display = 'none'
          array.style.transform = 'rotate(180deg)'
        }
      } else {
        const dropdown = document.querySelector('.specdisciplines')
        const array = document.querySelector('#specdisc')
        if (dropdown.style.display === 'none') {
          dropdown.style.display = 'block'
          array.style.transform = 'rotate(0deg)'
        } else {
          dropdown.style.display = 'none'
          array.style.transform = 'rotate(180deg)'
        }
      }

    }
  }
}

</script>

<style scoped lang="scss">
@import "style.scss";
</style>
