import request from '@/utils/request'

export function getClassroomInfo(params) {
  return request({
    url: '/classroom',
    method: 'get',
    params
  })
}
