import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../Services/Actions/action";
import { toast } from "react-toastify";

function SignupScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const [email,setemail] = useState('');
  const [password,setpass] = useState('');
  const [cnfpassword,setcnfpass] = useState('');
  const [name,setname] = useState('');
  const 
userInfo = useSelector((state)=>state.Todos.users)
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(password,cnfpassword);
    if(password!== cnfpassword){
      toast.error("password do not match");
      return;
    }
    dispatch(signup({email:email,password:password}))
    localStorage.setItem('userInfo',JSON.stringify(email,password))
    navigate(redirect || '/');
}
  // const submitHandler = async(e)=>{
  //   e.preventDefault()
  //   try {
  //     const {data} = await axios.post('/api/user/signin',{
  //       email,
  //       password,
  //     })
  //     console.log(data);
  //   } catch (error) {
      
  //   }
  // }
  // useEffect(()=>{
  //   if(userInfo){
  //     navigate(redirect);

  //   }
  // },[navigate,redirect,userInfo])
  
  return (
    <Container className="small-container">
      {/* <Helmet>
        <title>Sign Up</title>
      </Helmet> */}
      <h1 className="my-3">Sign Up</h1>
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" required  onChange={(e) =>setname(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required  onChange={(e) =>setemail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" placeholder="Enter email" required  onChange={(e)=>setpass(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="cnfpassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="Password" placeholder="Enter email" required  onChange={(e)=>setcnfpass(e.target.value)}/>
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>

        <div className="mb-3">
          Already a customer?{" "}
          <Link to={`/`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}

export default SignupScreen;