import axios from 'axios'

export function getRecommendData() {
  const url = '/api/getRecommendData'
  return axios.get(url, {}).then(res => {
    return res.data
  })
}
