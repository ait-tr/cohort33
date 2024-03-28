import { v4 } from "uuid"
import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "store/createAppSlice"

import { CatFactsState, CatFactResponse, CatFactInfo } from "./types"

const catFactsInitialState: CatFactsState = {
  data: [],
  isLoading: false,
  error: undefined,
}

export const catFactSlice = createAppSlice({
  name: "CAT_FACTS",
  initialState: catFactsInitialState,
  reducers: create => ({
    deleteCatFact: create.reducer(
      (state: CatFactsState, action: PayloadAction<string>) => {
        state.data = [...state.data].filter(
          (catFactObj: CatFactInfo) => catFactObj.id !== action.payload,
        )
      },
    ),
    resetCatFactState: create.reducer(() => catFactsInitialState),
    getCatFact: create.asyncThunk(
      async (arg: any, { rejectWithValue }) => {
        // arg - данные которые вы передаете из вашего компонента, в эту функцию
        // Например: данные, которые вы хотите отправить на сервер
        // Пример отправки:
        // const response = await fetch("URL", {
        //   method: "POST",
        //   body: JSON.stringify(arg)
        // })
        const response = await fetch("https://catfact.ninja/fact")
        // В result будет либо ошибка, либо успрешно пришедшие данные с сервера
        const result = await response.json()

        if (!response.ok) {
          rejectWithValue(result)
        } else {
          return result
        }
      },
      {
        pending: (state: CatFactsState) => {
          state.error = undefined
          state.isLoading = true
        },
        fulfilled: (
          state: CatFactsState,
          action: PayloadAction<CatFactResponse>,
        ) => {
          state.isLoading = false
          state.data = [
            // ...state.data - копируем все обьекты, которые лежат в массиве в стейте на момент вызова fulfilled
            // если это не сделать данные потеряются
            ...state.data,
            // action.payload - это то что приходит вам с сервера в случае кспешного ответа, в данном примере это обьект
            {
              id: v4(),
              fact: action.payload.fact,
            },
          ]
        },
        rejected: (state: CatFactsState, action: PayloadAction<any>) => {
          state.isLoading = false
          state.error = action.payload
        },
      },
    ),
  }),
  selectors: {
    catFact: (state: CatFactsState) => state,
  },
})

export const catFactSliceActions = catFactSlice.actions
export const catFactSliceSelectors = catFactSlice.selectors
