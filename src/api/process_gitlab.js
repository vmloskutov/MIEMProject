import request from '@/utils/request'

export function getProcessGitlabInfo(params) {
  return request({
    url: '/process_gitlab',
    method: 'get',
    params
  })
}
