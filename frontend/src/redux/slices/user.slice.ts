import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserData} from "../../utils/getUser";

const initialState: IUserData = {
    _id: 0,
    name: "",
    level: 0,
    history: [],
    photo_200: ""
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state: any, action: PayloadAction<IUserData>) {
            Object.keys(action.payload).forEach(
                (key) => (state[key] = action.payload[key as keyof IUserData])
            );
        }
    }
})

export const UserReducer = UserSlice.reducer
export const {setUser} = UserSlice.actions