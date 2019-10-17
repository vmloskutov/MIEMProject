import Mock from 'mockjs'

const data = Mock.mock([
  {
    name: "Павел Петров",
    telnum: "+7 (903) 712-32-21",
    email: "ppetrov@hse.ru",
    role: "Программист",
    group: "БИВ172",
    pic: "/assets/student-1.svg",
  },
  {
    name: "Дарья Кузнецова",
    telnum: "+7 (903) 214-91-52",
    email: "dmkuznez@hse.ru",
    role: "Менеджер",
    group: "БИВ173",
    pic: "/assets/student-2.svg",
  }
])

export default [
  {
    url: '/students',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: data
      }
    }
  }
]
