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
          <div class="university-disciplines">
            <div class="label">
              <img id="unidisc" class="array" src="../../../assets/chevron-up-solid.svg" @click="openMenu2()">
              Общеуниверситетские дисциплины
            </div>
            <div class="unidisciplines">
              <div
                v-for="tuniDiscipl in tuniDiscipls"
                :key="tuniDiscipl"
                class="disciplines"
              >
                {{ tuniDiscipl }}
              </div>
            </div>
          </div>
          <div class="specialized-disciplines">
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
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'DashboardLMS',
  data() {
    return {
      tuniDiscipls: [
        'Защита информационной среды бизнеса от киберпреступлений и иных угроз',
        'Обеспечение безопасности материальных ресурсов бизнеса и защита персонала'
      ],
      tspecDiscipls: [
        'Автоматизация проектных работ',
        'Вычислительные системы и компьютерные сети',
        'Менеджмент',
        'Микроконтроллерные системы',
        'Операционные системы',
        'Проектирование компьютерных сетей',
        'Проектирование систем на кристалле'
      ]
    }
  },
  methods: {
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
    openMenu2() {
      const dropdown = document.querySelector('.unidisciplines')
      const array = document.querySelector('#unidisc')
      if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block'
        array.style.transform = 'rotate(0deg)'
      } else {
        dropdown.style.display = 'none'
        array.style.transform = 'rotate(180deg)'
      }
    },
    openMenu3() {
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

</script>

<style scoped lang="scss">
@import "style.scss";
</style>
