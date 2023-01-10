import React, {FC, createContext, useEffect, useState} from 'react';
import './App.css';
import { User } from './components/User';

const App: FC = () => {

  const [error, setError] = useState<string | null >(null);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [address, setAddress] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  
  useEffect(()=>{
    fetch('https://randomuser.me/api/')
    .then(response=> response.json())
    .then(res => {
      setName(`${res.results[0].name.title} ${res.results[0].name.first} ${res.results[0].name.last}`);
      setAge(res.results[0].registered.age);
      setGender(res.results[0].gender);
      setAddress(`${res.results[0].location.city}, ${res.results[0].location.country} - ${res.results[0].location.street.name} ${res.results[0].location.street.number} - postcode: ${res.results[0].location.postcode}`);
  })
    .catch(err => setError(err))
  },[])
  
  return (
    <div className="App">
      <User  name={name} setName={setName} age={age} gender={gender} adress={address}/>
    </div>
  );
}

export default App;


