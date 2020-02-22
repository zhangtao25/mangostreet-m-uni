import request from './request'

function Login(parameter) {
  return request({
    url: '/api/v1/user/login',
    method: 'post',
    data: parameter
  })
}


export default {
  Login
}
