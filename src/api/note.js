import request from './request'

function AddNote(parameter) {
  return request({
    url: '/api/note/add',
    method: 'post',
    data: parameter
  })
}


export default {
  AddNote
}
