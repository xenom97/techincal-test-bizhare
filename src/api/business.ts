import type { IPayloadGetBusinessList } from './request.interface'
import type { ICategory, IDataBusiness, IResponse } from './response.interface'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getBusinessList = async (
  payload: IPayloadGetBusinessList
): Promise<IResponse<IDataBusiness>> => {
  const res = await fetch(`${BASE_URL}/business/parent/all`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  return await res.json()
}

export const getBusinessCategories = async (): Promise<IResponse<ICategory[]>> => {
  const res = await fetch(`${BASE_URL}/media/param/business/category`)
  return await res.json()
}
