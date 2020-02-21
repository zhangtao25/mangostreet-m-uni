import request from './request'

function GetEventIndexPageBy(parameter) {
  return request({
    url: '/api/v2/GetEventIndexPageBy',
    method: 'post',
    data: parameter
  })
}


function GetEventStatusInfo(parameter) {
  return request({
    url: '/api/v2/GetEventStatusInfo',
    method: 'post',
    data: parameter
  })
}


function NewEvent(parameter) {
  return request({
    url: '/api/v2/NewEvent',
    method: 'post',
    data: parameter
  })
}


NewEvent


export default {
  GetEventIndexPageBy,
  GetEventStatusInfo,
  NewEvent
}
