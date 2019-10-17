import request from '@/utils/request'

export function getStudentsInfo(params) {
  return request({
    url: '/students',
    method: 'get',
    params
  })
}
