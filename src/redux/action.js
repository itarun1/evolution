import * as types from './actionType'
import axios from 'axios'

const getUsers=(users)=>({
    type:types.GET_USERS,
    payload:users,
})

const useDeleted = ()=>({
    type:types.DELETE_USER,
})
const userAdded = ()=>({
    type:types.ADD_USER,
})
const userUpdate = ()=>({
    type:types.UPDTAE,
})
const userUpdated = (user)=>({
    type:types.GETONECITY,
    payload:user,
})

export const loadUsers=()=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}`).then((resp)=>{
            dispatch(getUsers(resp.data))
        }).catch((err)=>{console.log(err)})
    }
}
export const deleteUser=(id)=>{
    return function(dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp)=>{
            dispatch(useDeleted());
            dispatch(loadUsers())
        }).catch((err)=>{console.log(err)})
    }
}

export const addUser=(user)=>{
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_API}`,user).then((resp)=>{
            dispatch(userAdded());
            dispatch(loadUsers())
        }).catch((err)=>{console.log(err)})
    }
}

export const updatecity=(id)=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp)=>{
            dispatch(userUpdated(resp.data))
           // dispatch(loadUsers())
        }).catch((err)=>{console.log(err)})
    }
}
export const updatedcity=(user,id)=>{
    return function(dispatch){
        axios.put(`${process.env.REACT_APP_API}/${id}`,user).then((resp)=>{
            dispatch(userUpdate())
           // dispatch(loadUsers())
        }).catch((err)=>{console.log(err)})
    }
}