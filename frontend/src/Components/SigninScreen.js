import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../Services/Actions/action";

function SigninScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { search } = useLocation();
 // const redirectInUrl = new URLSearchParams(search).get("redirect");
 // const redirect = redirectInUrl ? redirectInUrl : "/";
  const [email,setemail] = useState('');
  const [password,setpass] = useState('');const 
userInfo = useSelector((state)=>state.Todos.users)
  const submitHandler = async (e) => {
    e.preventDefault();
   const check = userInfo.some((item) =>
       item.email ===email && item.password === password 
     );
     if(check){
     navigate("/todo")
     }
     else{
       toast.error("Credential are not matched")
     }
  }
  return (
    <Container className="small-container">
     
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required  onChange={(e) =>setemail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" placeholder="Enter email" required  onChange={(e)=>setpass(e.target.value)}/>
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>

        <div className="mb-3">
          New Customer?{" "}
          <Link to={`/signin`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}

export default SigninScreen;