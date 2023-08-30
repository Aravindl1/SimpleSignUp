import React, { useState } from 'react'
import './Form.css'
import {useFormik} from 'formik'
import Popup from './Popup';

const validate = values => {
    const errors = {};
    if (!values.firstname){
        errors.firstname='*Required'
    } else if (values.firstname.length > 8) {
        errors.firstname = '*Must be 8 characters or less'
    }
    if (!values.lastname){
        errors.lastname='*Required'
    } else if (values.lastname.length > 8) {
        errors.lastname = '*Must be 8 characters or less'
    }
    if (!values.email){
        errors.email='*Required'
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
         errors.email='*Invalid Email Address'
    }
    if (!values.password){
        errors.password='*Required'
    } else if (values.password.length > 8) {
        errors.lastname = '*Maximum 8 characters'
    } else if (values.password.length < 5){
        errors.password='Minumim 5 characters'
    }
    if (!values.confirmpassword){
        errors.confirmpassword='*Required'
    } else if (values.confirmpassword !== values.password){
        errors.confirmpassword="Password Doesn't match"
    }
    return errors
}

const Form = () => {
    const [bool,setBool] = useState(0);

    const form = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            confirmpassword:'',
        },
        validate,

        onSubmit : (values,{resetForm}) => {
           if (bool) {
            setBool(0);
            resetForm({values:''})
           }else {
            setBool(1);
           }
        }
    })
  return (
    <div className='main'>
        <div className="signUp-form shadow">
            <h2 className='heading2'>Sign Up Here</h2>
            <form onSubmit={form.handleSubmit}>
                <input 
                  type='text'
                  placeholder='First Name'
                  name='firstname'
                  onChange={form.handleChange}
                  value={form.values.firstname}
                  autoComplete='off'
                  onBlur = {form.handleBlur}/>
                  
                {
                  form.touched.firstname && form.errors.firstname ? <span>{form.errors.firstname}</span>:null
                }
                <input 
                  type='text'
                  placeholder='Last Name'
                  name='lastname'
                  onChange={form.handleChange}
                  value={form.values.lastname}
                  autoComplete='off'
                  onBlur = {form.handleBlur}/>
                {
                  form.touched.lastname && form.errors.lastname ? <span>{form.errors.lastname}</span>:null
                }
                <input 
                  type='text'
                  placeholder='Email...'
                  name='email'
                  value={form.values.email}
                  onChange={form.handleChange}
                  autoComplete='off'
                  onBlur = {form.handleBlur}/>
                  
                {
                  form.touched.email && form.errors.email ? <span>{form.errors.email}</span>:null
                }  
                <input 
                  type='password'
                  placeholder='Password'
                  value={form.values.password}
                  onChange={form.handleChange}
                  name='password'
                  autoComplete='off'
                  onBlur = {form.handleBlur}/>
                {
                  form.touched.password && form.errors.password ? <span>{form.errors.password}</span>:null
                }  
                <input 
                  type='password'
                  placeholder='Confirm Password'
                  name='confirmpassword'
                  onChange={form.handleChange}
                  value={form.values.confirmpassword}
                  autoComplete='off'
                  onBlur = {form.handleBlur}/>
                {
                  form.touched.confirmpassword && form.errors.confirmpassword ? <span>{form.errors.confirmpassword}</span>:null
                }
                <input 
                  type='submit'
                  value='Submit'
                />
            </form>
        </div>
        <div className="message-box">
            {
                bool ? (<Popup onClick={form.handleSubmit}/>):null
            }
        </div>
    </div>
  )
}

export default Form