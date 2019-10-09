import request from '@/utils/request'

export function getLMSInfo(params) {
  return request({
    url: '/lms',
    method: 'get',
    params
  })
}
