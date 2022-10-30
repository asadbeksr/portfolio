import axios from 'axios'
import { parseCookies } from 'nookies'

const cookies = parseCookies()

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  // headers: {
  //   Authorization: cookies.ACCESS_TOKEN,
  // },
})
