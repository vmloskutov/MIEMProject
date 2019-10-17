import Mock from 'mockjs'

const data = Mock.mock(
  [
    {
      status: "Новых задач",
      number: "12"
    },
    {
      status: "Задачи в работе",
      number: "04"
    },
    {
      status: "Задачи отложены",
      number: "03"
    },
    {
      status: "Задач закрыто",
      number: "10"
    }
  ]
)

export default [
  {
    url: '/statisticks_card',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: data
      }
    }
  }
]
