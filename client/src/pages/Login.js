import React from 'react';
import "../styles/Login.css";
import { Form, Input } from 'antd';
import {Link} from 'react-router-dom';
function Login() {

   //const navigate = useNavigate()
    //Form Handler
    const onfinishHandler = (values) =>{
      console.log(values);
  };
  return (
    <div className="form-container">
    <Form layout="vertical" onfinish={onfinishHandler} className='register-form'>
        <h3 className='text-center'>Login Form Page</h3>
        <Form.Item label="Email" name="email">
            <Input type='email' required/>
        </Form.Item>
        <Form.Item label="Password" name="password">
            <Input type='password' required/>
        </Form.Item>
        <Link to="/register" className='ms-2'>Not a user Register here </Link>
        <button className='btn btn-primary' type='submit'>Login</button>
    </Form>
 </div>
  )
}

export default Login
