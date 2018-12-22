import Api from '@/services/Api'

export default {
  fetchLaws () {
    return Api().get('laws')
  },

  addLaw (params) {
    return Api().post('laws', params)
  },

  updateLaw (params) {
    return Api().put('laws/' + params.id, params)
  },

  getLaw (params) {
    return Api().get('laws/' + params.id)
  },
  deleteLaw (id) {
    return Api().delete('laws/' + id)
  }
}
