import { createSlice } from "@reduxjs/toolkit"

const initialState = { gamestate: "", }

const quizSlice = createSlice({
    name: "quiz",
    initialState: { value: initialState },
    reducers: {
        mulai(state) {
            state.value.gamestate = "mulai"
        },
        over(state) {
            state.value.gamestate = "over"
        }
    }
})

export const { mulai, over } = quizSlice.actions
export default quizSlice.reducer
