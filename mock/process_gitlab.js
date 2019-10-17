import Mock from 'mockjs'

const data = Mock.mock({
  link: "https://docs.gitlab.com/ee/user/operati...",
  git: [
    {
      update: "Yuri Strelnikov @UriStr Commented on commit 60e32973 'Spinner added, search case fixed'",
      time: "2 часа назад"
    },
    {
      update: "Vladislav Petrochenko @v.petrochenko.w Pushed to branch hm3 commit 60e32973 'initail commit'",
      time: "10 часов назад"
    },
    {
      update: "Vladislav Petrochenko @v.petrochenko.w Pushed to branch hm2-complete cf5c6d01 · исправил ошибку в валидаторе",
      time: "вчера"
    }
  ]
})

export default [
  {
    url: '/process_gitlab',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: data
      }
    }
  }
]
