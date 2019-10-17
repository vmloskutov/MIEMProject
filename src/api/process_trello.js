import request from '@/utils/request'

export function getProcessTrelloInfo(params) {
  return request({
    url: '/process_trello',
    method: 'get',
    params
  })
}
