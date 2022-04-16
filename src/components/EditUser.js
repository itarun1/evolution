import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useDispatch , useSelector} from 'react-redux';
import { updatecity, updatedcity} from '../redux/action';
import { useNavigate, useParams } from 'react-router-dom';
//import Button from '@mui/material/Button';



const EditUser = () => {
    const [state, setState] = useState({
        country:"",
        city:'',
        population:'',
    })
    let navigate = useNavigate()
    const {user} = useSelector((state)=>state.data)
    let {id}= useParams()
    const [error, setError] = useState('')
    let dispatch= useDispatch()
    const {country,city,population}= state;
    useEffect(()=>{
        dispatch(updatecity(id))
    }, [])
    useEffect(()=>{
        if(user){
            setState({...user})
        }
    },[user])
    const handleInput= (e)=>{
        let {name, value}= e.target
        setState({...state,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!country || !city || !population){
            setError('all fields are required')
        }
        else{
             dispatch(updatedcity(state, id))
             navigate('/')
        }
    }
  return (
    <div>
        Edit City
        <div >
     <Button variant='contained' onClick={()=>navigate('/')}>Go back</Button>
     </div>
        <form onSubmit={handleSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
      <TextField id="standard-basic"value={country||""} label="country" variant="standard" name='country' type="text" onChange={handleInput}/>
      <TextField id="standard-basic" value={city||""} label="city" variant="standard" name='city' type="text" onChange={handleInput}/>
      <TextField id="standard-basic" value={population||""} label="population" variant="standard" name='population'  type="number" onChange={handleInput}/>
      <Button variant='contained'  type="update">submit</Button>
    </form>
    </div>
  )
}

export default EditUser