const action = {
    pullDownRefresh({commit},payload){
        commit("pullDownRefresh",payload)
    },
    pullUpRefresh({commit},payload){
        commit("pullUpRefresh",payload)
    }
}
export default action
