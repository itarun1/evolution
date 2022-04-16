import * as types from './actionType'
const initialState = {
    users:[],
    user:[],
    loading:true
}

const userReducers = (state=initialState,action)=>{
    switch(action.type){
        case types.GET_USERS:
            return {
                ...state,
                users:action.payload,
                loading:false,
            };
            case types.DELETE_USER:
                return{
                    ...state,
                    loading:false,
                };
                case types.ADD_USER:
                    case types.GETONECITY:
                    return{
                        ...state,
                        user:action.payload,
                        loading:false,
                    }
                    case types.UPDTAE:
            default:
                return state
    }
}

export default userReducers