import request from '@/utils/request'

export function getStatisticksCardInfo(params) {
  return request({
    url: '/statisticks_card',
    method: 'get',
    params
  })
}
