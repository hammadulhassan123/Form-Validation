import './App.css'
import FormInput from './components/FormInput'
import { useState, useRef } from 'react'


function App() {
  // const usernameRef= useRef(); //we have used it for stopping re-rendering
  const [values,setValues]= useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
  });

    const inputs=[
      {
        id: 1,
        name:"username",
        type:"text",
        placeholder:"Username",
        errorMessage:"Username should be 3-16 characters long and shouldn't include any special character like: @,#,$,%,& etc !",
        label:"Username",
        pattern: "^[A-Za-z0-9]{3,16}$", // capital letters then small letters then numbers range and then overall range of username characters whereas $ is ending symbol
        required: true,
      },
      {
        id: 2,
        name:"email",
        type:"email",
        placeholder:"Email",
        errorMessage:"Enter a vaild email address",
        label:"Email",
        required: true,
      },
      {
        id: 3,
        name:"birthday",
        type:"date",
        placeholder:"Birthday",
        label:"Birthday",
      },
      {
        id: 4,
        name:"password",
        type:"password",
        placeholder:"Password",
        errorMessage:"Password should be 8-20 characters and include 1 letterm 1 number and 1 special character",
        label:"Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`, // Js regex of 1 letter, 1 num and 1 special char. available easily online
        required: true,
      },
      {
        id: 5,
        name:"confirmPassword",
        type:"password",
        placeholder:"Confrim Password",
        errorMessage:"Password Miss-matched",
        label:"Confirm Password",
        pattern: values.password,
        required: true,
      } 
    ]

  const handleSubmit=(e) =>{
    e.preventDefault();
   
  };
  const onChange= (e) =>{
    setValues({...values, [e.target.name]: e.target.value});
  };
console.log(values);

  return ( 
    <>
      <div className='app'>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs.map((input) =>(
            <FormInput  key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          ))}
          
            <button>Submit</button>
        </form>
      </div> 
    </>
  )
}

export default App
