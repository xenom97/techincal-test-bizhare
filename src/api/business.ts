import type { IPayloadGetBusinessList } from './request.interface'
import type { ICategory, IDataBusiness, IResponse } from './response.interface'

export const getBusinessList = async (
  payload: IPayloadGetBusinessList
): Promise<IResponse<IDataBusiness>> => {
  const res = await fetch(`/api/business/parent/all`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  return await res.json()
}

export const getBusinessCategories = async (): Promise<IResponse<ICategory[]>> => {
  const res = await fetch(`/api/media/param/business/category`)
  return await res.json()
}
