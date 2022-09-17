import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UsersForm from './Components/UsersForm'
import axios from 'axios'
import UsersList from './Components/UsersList'

function App() {
  const [count, setCount] = useState(0)

  const [forms, setForms]= useState([]);

   useEffect (() => {
 axios.get('https://users-crud1.herokuapp.com/users/')
 .then(res=>setForms(res.data));
  },[])

  const getforms= () =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
 .then(res=>setForms(res.data));
  }

  console.log(forms)
  return (
    <div className="App">
    <UsersForm getforms={getforms}/>
    <UsersList forms={forms}/>
    </div>
  )
}

export default App
