
import './App.css';
import{Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';




function App() {
  return (
    <div className="App">
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/add-city' element={<AddUser/>}/>
      <Route path ='/edit-city/:id' element={<EditUser/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
