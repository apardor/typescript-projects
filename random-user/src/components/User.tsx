import {ChangeEvent, FC, useState} from 'react';

interface IUserProps {
    name : string;
    setName : React.Dispatch<React.SetStateAction<string>>;
    age: number;
    gender: string;
    adress: string;
}

export const User: FC<IUserProps> = ({name, setName, age, gender, adress}) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value);
    }

  return (
    <div className='User'>
      <input placeholder='Write new name...' onChange={handleChange}/>
      <h1> name: {name} </h1>
      <h2> age: {age} </h2>
      <h2> gender: {gender} </h2>
      <h2> address: {adress} </h2>
    </div>
  );
}
