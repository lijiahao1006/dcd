export const state = () => ({
  car: '奔驰'
})

export const mutations = {
  updata (state, text = '宝马') {
    state.car = text
  }
}
