import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ToDoitems from './ToDoitems'

function DisplayTodos() {
    const store = useSelector(state=>state.Todos)
    const[sort,setsort]=useState("active")
  return (
    <div className='displaytodos'>
        
        <div className='buttons'>
            <Button onClick={()=>setsort("active")}>Active</Button>
            <Button onClick={()=>setsort("completed")}>Completed</Button>
            <Button onClick={()=>setsort("all")}>All</Button>
        </div>
        <ul>
            {
                    store.todos.length>0 && sort === "active"?store.todos.map((item)=>{
                        return(
                            item.completed===false && <ToDoitems key={item.id} item={item}/>
                        )
                    }):null
            }

{
                    store.todos.length>0 && sort === "completed"?store.todos.map((item)=>{
                        return(
                            item.completed===true && <ToDoitems key={item.id} item={item}/>
                        )
                    }):null
            }

{
                    store.todos.length>0 && sort === "all"?store.todos.map((item)=>{
                        return(
                             <ToDoitems key={item.id} item={item}/>
                        )
                    }):null
            }

            
        </ul>
    </div>
  )
}

export default DisplayTodos