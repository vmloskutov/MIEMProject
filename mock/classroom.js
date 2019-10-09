import Mock from 'mockjs'

const data = Mock.mock([
  {
    titel: "Основы химии",
    teacher: "Фомин Евгений" ,
    message: "Преподаватель добавил новый материал “Тест по темам первого модуля”.",
    header: "header-1"
  },
  {
    titel: "Общая история" ,
    teacher: "Кузнецов Петр" ,
    message: "Преподаватель внёс изменения в документ “Списки групп и успеваемость”",
    header: "header-2"
  },
  {
    titel: "История искусств" ,
    teacher: "Савченко Дарья" ,
    message: "Практическая работа №3: необходимо выполнить до завтра.",
    header: "header-3"
  }

])

export default [
  {
    url: '/classroom',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: data
      }
    }
  }
]
