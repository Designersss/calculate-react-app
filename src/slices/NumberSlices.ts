import {createSlice} from "@reduxjs/toolkit";
import {arrDenominator, arrNum} from "../utils/utlis.ts";

export const numberSlices = createSlice({
    name: 'count',
    initialState: {
        count: '',
        denominator: '',
        countTw: '',
        result: 0,
        prevMeaning: ''
    },
    reducers: {
        computations: (state, action) => {
            for (let elOne of arrNum) {
                if (state.denominator === ''){
                    if (action.payload === elOne) {
                        state.count += action.payload
                    }
                } else {
                    if (action.payload === elOne) {
                        state.countTw += action.payload
                    }
                }
            }
            for (let el of arrDenominator) {
                if (action.payload === el) {
                    if (state.count === ''){
                        alert('Введите первое число')
                    } else {
                        state.denominator = action.payload
                    }
                }
            }
            if (action.payload === 'AC') {
                state.count = ''
                state.denominator = ''
                state.prevMeaning = ''
                state.countTw = ''
            }
            if (action.payload === '='){
                const oneCount = parseInt(state.count)
                const twCount = parseInt(state.countTw)
                if (state.denominator === '+'){
                    state.result = oneCount + twCount
                    state.prevMeaning = state.count + state.denominator + state.countTw + "=" + state.result
                }
                if (state.denominator === '-'){
                    state.result = oneCount - twCount
                    state.prevMeaning = state.count + state.denominator + state.countTw + "=" + state.result
                }
                if (state.denominator === 'X'){
                    state.result = oneCount * twCount
                    state.prevMeaning = state.count + '*' + state.countTw + "=" + state.result
                }
                if (state.denominator === '/'){
                    state.result = oneCount / twCount
                    state.prevMeaning = state.count + state.denominator + state.countTw + "=" + state.result
                }
                state.count = ''
                state.denominator = ''
                state.countTw = ''
            }
        }
    }
})

export const {reducer, actions} = numberSlices