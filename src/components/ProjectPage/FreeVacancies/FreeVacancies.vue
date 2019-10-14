<template>
  <el-row class="vacancies-row">
    <el-col :span="20" :offset="2" class="vacancies-table">
      <el-row class="vacancies-table-header">
        <el-col :span="2" :offset="1">
          Роль
        </el-col>
        <el-col :span="1" :offset="1" style="white-space: nowrap">
          Кол-во
        </el-col>
        <el-col :span="5" :offset="1">
          Изученные предварительно<br> ключевые дисциплины
        </el-col>
        <el-col :span="8" :offset="1">
          Необходимые дополнительно для выполнения проекта дисциплины
        </el-col>
        <el-col :span="3">

        </el-col>
      </el-row>
      <hr>
      <el-row class="vacancies-table-row">
        <el-col :span="2" :offset="1">
          Аналитик/ менеджер
        </el-col>
        <el-col :span="1" :offset="1">
          1
        </el-col>
        <el-col :span="5" :offset="1">
          - Физика<br>
          - Методы поиска<br>
          - технических решений<br>
          - Электроника
        </el-col>
        <el-col :span="8" :offset="1">
          - Электромагнитные поля и волны в современных телекоммуникацияха<br>
          - Физика электронных приборов и средств связи
        </el-col>
        <el-col :span="3" class="vacancies-table-button">
          <el-button type="primary">Записаться</el-button>
        </el-col>
      </el-row>
      <hr>
      <el-row class="vacancies-table-row">
        <el-col :span="2" :offset="1">
          Технолог/ составитель
        </el-col>
        <el-col :span="1" :offset="1">
          1
        </el-col>
        <el-col :span="5" :offset="1">
          - Информатика<br>
          - Физика<br>
          - Электроника<br>
          - Информационные технологии разработки устройств и систем телекоммуникаций
        </el-col>
        <el-col :span="8" :offset="1">
          -  Физика электронных приборов и средств связи<br>
          - Основы моделирования в инфокоммуникационных технологиях и системах связи
        </el-col>
        <el-col :span="3" class="vacancies-table-button">
          <el-button type="primary">Записаться</el-button>
        </el-col>
      </el-row>

    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'FreeVacancies'
}

</script>

<style scoped lang="scss">
@import "style.scss";
</style>
