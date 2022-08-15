import React, { useEffect, useRef, useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {GoPlus} from 'react-icons/go'
import { addtodos, completed, deletetodo, updatetodo } from '../Services/Actions/action'
import DisplayTodos from './DisplayTodos'
function ToDo() {
    const inputref=useRef(true)
    const store = useSelector(state=>state.Todos)
  
    const dispatch = useDispatch()
    const [todo,settodo]=useState('')

    const update=(id,value,e)=>{
        if(e.which===13){
            dispatch(updatetodo(id,value))
            inputref.current.disabled=true;
        }
    }

    const changefocus =()=>{
        inputref.current.disabled=false;
        inputref.current.focus()
    }
    const handelSubmit=(e)=>{
        e.preventDefault();
        const id=Math.floor(Math.random()*1000)

            dispatch(addtodos({todo,id,completed:false}))
    }
    const handelchange=(e)=>{
        settodo(e.target.value);
    }

    const handeldelete=(id)=>{
       
        dispatch(deletetodo(id))
    }

    const handelcomplete=(id)=>{
        dispatch(completed(id));

    }
    
  return (
    <div className='.addTodos'>
        <Form onSubmit={handelSubmit} className='addTodos'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="" onChange={handelchange} className="todo-input" />
        
      </Form.Group>
      <Button  type="submit" className='add-btn' >
        <GoPlus/>
      </Button>
        </Form>
        <DisplayTodos/>
       
    </div>
  )
}

export default ToDo