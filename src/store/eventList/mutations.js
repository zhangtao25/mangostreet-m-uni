const mutation = {
    pullDownRefresh(state,payload){
        state.pageIndex = 1
        console.log(`当前是 ${state.pageIndex}`)
    },
    pullUpRefresh(state,payload){
        state.pageIndex = state.pageIndex + 1
        console.log(`当前是 ${state.pageIndex}`)
    }
}

export default mutation
