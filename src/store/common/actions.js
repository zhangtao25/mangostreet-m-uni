import * as api from '@/http/requests.js'

export const requestList = ({commit, state}, body) => {
	api.requestList(body, data => {
		if(data.resultList){
			commit('setList', data.resultList)
		}
	})
}