import React from 'react';
import "../styles/RegisterStyles.css";
import { Form, Input } from 'antd';
import {Link} from 'react-router-dom';
//import FormItem from 'antd/es/form/FormItem'
function Register() {

    //const navigate = useNavigate()
    //Form Handler
    const onfinishHandler = (values) =>{
        console.log(values);
    };
  return (
    <>
    <div className="form-container">
        <Form layout="vertical" onfinish={onfinishHandler} className='register-form'>

            <h3 className='text-center'>Register Form Page</h3>
            
            <Form.Item label="Name" name="name">
                <Input type='text' required/>
            </Form.Item>
            <Form.Item label="Email" name="email">
                <Input type='email' required/>
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input type='password' required/>
            </Form.Item>
            <Link to="/login" className='ms-2'>Already user login here </Link>
            <button className='btn btn-primary' type='submit'>Register</button>
        </Form>
    </div>
    </>
  )}
export default Register
