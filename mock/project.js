import Mock from 'mockjs'

const data = Mock.mock({
  number: "Проект #208, практико-ориентированный",
  name_rus: "Компактный квантовый генератор случайных чисел",
  name_eng: "Compact Quantum Random Number Generator"
})

export default [
  {
    url: '/project',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: data
      }
    }
  }
]
