import request from '@/utils/request'

export function getProjectInfo(params) {
  return request({
    url: '/project',
    method: 'get',
    params
  })
}
