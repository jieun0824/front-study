import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

let cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 1, name : 'Grey Yordan', count : 1}
  ] ,
  reducers:{
    changeCount(state, action){
      console.log(state)
      const result = state.find((data)=>
        {return data.id == action.payload})
        result.count += 1
    },
    plus(state, action){
      console.log(action.payload.id)
      state.push({id:action.payload.id, name: action.payload.title, count: 0})
    }
  }
})



export let {changeCount, plus} = cart.actions


export default configureStore({
  reducer: { cart : cart.reducer, user:user.reducer }
}) 