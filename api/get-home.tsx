import { ResponseData, BaseData } from './response'
import { request } from '@/utils/request'
import { otruyen } from '@/utils/env'
import { queryOptions } from '@tanstack/react-query'

export interface Category {
  id: string
  name: string
  slug: string
}

export interface ChapterLatest {
  filename: string
  chapter_name: string
  chapter_title: string
  chapter_api_data: string
}

export interface Item {
  _id: string
  name: string
  slug: string
  origin_name: string[]
  status: string
  thumb_url: string
  sub_docquyen: boolean
  category: Category[]
  updatedAt: string // ISO date
  chaptersLatest: ChapterLatest[]
}

export interface ItemsResponse {
  items: Item[]
}

type Pagination = {
  totalItems: number
  totalItemsPerPage: number
  currentPage: number
  pageRanges: number
}

type Params = {
  type_slug: string
  filterCategory: string[]
  sortField: string
  pagination: Pagination
  itemsUpdateInDay: number
}

type SeoOnPage = {
  titleHead: string
  descriptionHead: string
  og_type: string
  og_image: string[]
}

// map với tất cả đống ở trên
export interface ItemsResponseData extends BaseData {
  seoOnPage: SeoOnPage
  params: Params
  items: Item[]
  breadCrumb: string[]
}

export const getHome = () => {
  return queryOptions({
    queryKey: ['get-home'],
    queryFn: () => request<ResponseData<ItemsResponseData>>(otruyen, `v1/api/home`)
  })
}
