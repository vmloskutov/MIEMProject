<template>
  <el-row class="classroom-block">
    <el-col :span="8" class="subject">
      <div class="card">
        <header class="header-1">
          <div class="subject-label">
            Основы химии
            <div class="teacher">
              Фомин Евгений
            </div>
          </div>
          <img class="img-subject" src="../../../assets/Chemistry.png">
        </header>
        <main>
          Преподаватель добавил новый материал “Тест по темам первого модуля”.
          Необходимо выполнить до 10 октября.
        </main>
      </div>
    </el-col>
    <el-col :span="8" class="subject">
      <div class="card">
        <header class="header-2">
          <div class="subject-label">
            Общая история
            <div class="teacher">
              Кузнецов Петр
            </div>
          </div>
          <img class="img-subject" src="../../../assets/History.png">
        </header>
        <main>
          Преподаватель внёс изменения в документ “Списки групп и успеваемость”
        </main>
      </div>
    </el-col>
    <el-col :span="8" class="subject">
      <div class="card">
        <header class="header-3">
          <div class="subject-label">
            История искусств
            <div class="teacher">
              Савченко Дарья
            </div>
          </div>
          <img class="img-subject" src="../../../assets/ArtHistory.png">
        </header>
        <main>
          Практическая работа №3: необходимо выполнить до завтра.
        </main>
      </div>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'DashboardClassroom'
}

</script>

<style scoped lang="scss">
@import "style.scss";
</style>
