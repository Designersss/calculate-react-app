import {configureStore} from "@reduxjs/toolkit";
import {numberSlices} from "../slices/NumberSlices.ts";

export const store = configureStore({
    reducer: {
        count: numberSlices.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>