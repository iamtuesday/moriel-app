import { Polylang } from '../interfaces/generals'
import { baseApi } from './baseApi'

export const getGenerals = async () => {
  
  try {
    const [ { data: polylang }] = await Promise.all([
      baseApi.get<Polylang>('/general?populate=deep')
    ])
    return {polylang: polylang.data }
  } catch (error: any) {
    throw new Error(error.message)
  }
}
