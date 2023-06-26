import React from 'react';
import "../styles/RegisterStyles.css";
import { Form, Input, message } from 'antd';
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom';
//import FormItem from 'antd/es/form/FormItem'
function Register() {

    const navigate = useNavigate()
    //Form Handler
    const onfinishHandler =  async (values) =>{
        try {
            const res = await axios.post('/api/v1/user/register',values)
            if(res.data.success){
                message.success('Register Successfully');
            }else{
                message.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            message.error('Something went Wrong')
            navigate('/login')
        }
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
