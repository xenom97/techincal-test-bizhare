export interface IResponse<T> {
  success: boolean
  data: T
  message: string
}

export interface IDataBusiness {
  content: IBusiness[]
  pageable: IPageable
  totalPages: number
  totalElements: number
  last: boolean
  number: number
  size: number
  numberOfElements: number
  sort: ISort
  first: boolean
  empty: boolean
}

export interface IBusiness {
  id: number
  logo: string
  logoUrl: string
  businessName: string
  businessCategoryName: string
  businessCategoryId: string
  businessCore: string
}

export interface IPageable {
  sort: ISort
  pageSize: number
  pageNumber: number
  offset: number
  paged: boolean
  unpaged: boolean
}

export interface ISort {
  sorted: boolean
  empty: boolean
  unsorted: boolean
}

export interface ICategory {
  paramCode: string
  paramName: string
}
