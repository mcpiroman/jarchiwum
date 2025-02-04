import axios from 'axios'

export const appAPI = axios.create({
  baseURL: 'https://janusmarcin.pl/replay/'
})

export const twitchAPI = axios.create({
  baseURL: 'https://api.twitch.tv/helix',
  headers: {
    'Client-ID': 'w87bqmg0y9ckftb2aii2tdielbr1rx'
  }
})

export const youtubeAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  headers: {
    'Accept': 'application/json'
  },
  params: {
    key: 'AIzaSyAe_x16Z5RUb3r_au_XOv_k2ZPgVqZHNts'
  }
})

export const playlistAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  headers: {
    'Accept': 'application/json'
  },
  params: {
    key: 'AIzaSyAe_x16Z5RUb3r_au_XOv_k2ZPgVqZHNts'
  }
})
