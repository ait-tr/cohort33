export interface CatFactResponse {
  fact: string
  length: number
}

export interface CatFactInfo {
  fact: string
  id: string
}

export interface CatFactsState {
  data: CatFactInfo[]
  isLoading: boolean
  error: any
}
