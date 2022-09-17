import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getforms}) => {

    const{register, handleSubmit} = useForm();



    const submit=(data) =>{
     axios.post('https://users-crud1.herokuapp.com/users/', data)
     .then(()=> getforms())
     .catch(error=>console.log(error.response))
     console.log(data)
    }

    return (

        <form onSubmit={handleSubmit(submit)}>
            <h1>Formulary</h1>
             <div> 
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" {...register("first_name")} />
            </div>
            <div>
                <label htmlFor="last_name">Last Name</label>
                <input type="text"  id="last_name" {...register("last_name")} /></div>
        <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" {...register("email")} />
            </div>

             <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" {...register("password")} />
            </div>
           
                   
            <div>
                <label htmlFor="birthday">Birthday</label>
                <input type="date" name="birthday" id="birthday"{...register("birthday")} /></div>

            <button>Submit</button>
        </form>


    );
};

export default UsersForm;