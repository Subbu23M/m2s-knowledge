import {
    createSlice
} from "@reduxjs/toolkit";
import {
    usersData
} from '../FakeData';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        value: usersData
    },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => {
                return user.id !== action.payload.id;
            })
        },
        updateUserName: (state, action) => {
            state.value.map((user) => {
                if (user.id === action.payload.id) {
                    user.username = action.payload.username;
                }
            })
        }
    }
})

export const {
    addUser,
    deleteUser,
    updateUserName
} = usersSlice.actions;
export default usersSlice.reducer;