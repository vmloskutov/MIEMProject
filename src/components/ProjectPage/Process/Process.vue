<template>
  <el-row class="process-row">
    <el-col :span="20" :offset="2" class="process-table">
      <el-row class="process-table">
        <el-col :span="12" class="process-table-main">
          <el-row class="process-table-row">
            <el-col :span="4" class="process-table-header">
              <img src="@/assets/trello-icon.svg" />
            </el-col>
            <el-col :span="20" class="process-table-header">
               <span class="semibold">Trello</span> <a>https://trello.com/b/UrvrCe4N/19112...</a>
            </el-col>
          </el-row>
          <el-row class="process-table-row">
            <div class="last-updates semibold">Последние обновления</div>
          </el-row>
          <el-row class="process-table-line">
              <div class="process-text">
                Гольцман Григорий переместил(а) карточку Презентация на в список Сделано на доске Проектная работа               </div>
              <div class="process-time">
                2 часа наза
              </div>
          </el-row>
          <hr>
          <el-row class="process-table-line">
              <div class="process-text">
                Гольцман Григорий прекрепил(а) Учебник по квантовой физике к карточке Полезные материалы на доске Проектная работа </div>
              <div class="process-time">
                5 часа наза
              </div>
          </el-row>
          <hr>
          <el-row class="process-table-line">
              <div class="process-text">
                Павел Петров прекрепил(а) Расчеты к карточке Задания на проверку на доске Проектная работа                </div>
              <div class="process-time">
                вчера
              </div>
          </el-row>
        </el-col>
        <el-col :span="12" class="process-table-main">
          <el-row class="process-table-row">
            <el-col :span="4" class="process-table-header">
                <img src="@/assets/gitlab-icon.svg" />
            </el-col>
            <el-col :span="20" class="process-table-header">
              <span class="semibold">Gitlab</span> <a>https://docs.gitlab.com/ee/user/operati...</a>
            </el-col>
          </el-row>
          <el-row class="process-table-row">
              <div class="last-updates semibold">Последние обновления</div>
          </el-row>
          <el-row class="process-table-line">
              <div class="process-text">
                Yuri Strelnikov @UriStr Commented on commit 60e32973 "Spinner added, search case fixed"
              </div>
              <div class="process-time">
                2 часа наза
              </div>
          </el-row>
          <hr>
          <el-row class="process-table-line">
              <div class="process-text">
                Vladislav Petrochenko @v.petrochenko.w Pushed to branch hm3 commit 60e32973 "initail commit"

              </div>
              <div class="process-time">
                10 часов наза
              </div>
          </el-row>
          <hr>
          <el-row class="process-table-line">
              <div class="process-text">
                Vladislav Petrochenko @v.petrochenko.w Pushed to branch hm2-complete cf5c6d01 · исправил ошибку в валидаторе
              </div>
              <div class="process-time">
                вчера
              </div>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'Process'
}

</script>

<style scoped lang="scss">
@import "style.scss";
</style>
