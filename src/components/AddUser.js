import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action';
import { useNavigate } from 'react-router-dom';



const AddUser = () => {
    const [state, setState] = useState({
        country:"",
        city:'',
        population:'',
    })
    let navigate = useNavigate()
    const [error, setError] = useState('')
    let dispatch= useDispatch()
    const {country,city,population}= state;
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
             dispatch(addUser(state))
             navigate('/')
        }
    }
  return (
    <div>
        Add city
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
     
      <TextField id="standard-basic" label="country" variant="standard" name='country' type="text" onChange={handleInput}/>
      <TextField id="standard-basic" label="city" variant="standard" name='city' type="text" onChange={handleInput}/>
      <TextField id="standard-basic" label="population" variant="standard" name='population'  type="number" onChange={handleInput}/>
      <Button variant='contained'   type="submit">submit</Button>
    </form>
    </div>
  )
}

export default AddUser