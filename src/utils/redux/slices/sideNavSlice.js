import { createSlice } from "@reduxjs/toolkit";

const sideNavSlice = createSlice({
    name: 'sideNav',
    initialState:{
        sideData:"Popular Movies",
        isOpen:false,
    },
    reducers:{
        navigateTo:(state,action)=>{
            state.sideData = action.payload
        },
        setOpen:(state)=>{
            state.isOpen = true;
        },
        setClose:(state)=>{
            state.isOpen = false;
        }
    }
});

export const {navigateTo,setOpen,setClose} = sideNavSlice.actions;
export default sideNavSlice.reducer;