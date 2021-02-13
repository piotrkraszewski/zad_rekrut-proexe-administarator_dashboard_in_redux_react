import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'


const slice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    users: [],
    error: ''
  },
  reducers: {
    addNewUser: (state, action) => {
      state.users.push({
        id: state.users[0] != undefined ? state.users[state.users.length - 1].id + 1 : 1,
        name: action.payload.name,
        email: action.payload.email,
        username: action.payload.username,
        address: {
          city: action.payload.city
        }
      })
    },
    deleteNew: (state, action) => {
      const newUsersArr = state.users.filter((user) => user.id !== action.payload.id)
      return {
        ...state,
        users: newUsersArr,
      }
    },
    fetchUsersRequest: (state) => ({
      ...state,
      loading: true
    }),
    fetchUsersSuccess: (state, action) => ({
      loading: false,
      users: action.payload,
      error: ''
    }),
    fetchUsersFailure: (state, action) => ({
      loading: false,
      users: [],
      error: action.payload
    })
  }
})
// console.log(slice)


export const {fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure, addNewUser, deleteNew} = slice.actions
export default slice.reducer



//=====================
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest()) // sets loading to true
    try{
      const response = await axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
      dispatch(fetchUsersSuccess(response.data))
    } catch(err) {
      dispatch(fetchUsersFailure(err.message))
    }
  }
}