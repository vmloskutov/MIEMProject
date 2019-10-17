import Mock from 'mockjs'

const data = Mock.mock({
  link: "https://trello.com/b/UrvrCe4N/19112...",
  trello: [
    {
      update: "Гольцман Григорий переместил(а) карточку Презентация на в список Сделано на доске Проектная работа ",
      time: "2 часа назад"
    },
    {
      update: "Гольцман Григорий прекрепил(а) Учебник по квантовой физике к карточке Полезные материалы на доске Проектная работа",
      time: "5 часов назад"
    },
    {
      update: "Павел Петров прекрепил(а) Расчеты к карточке Задания на проверку на доске Проектная работа",
      time: "вчера"
    }
  ]
})

export default [
  {
    url: '/process_trello',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: data
      }
    }
  }
]
