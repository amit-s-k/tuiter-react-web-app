import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo,deleteTodo,todoDoneToggle} from "./reducers/todo-reducer";

const Todos = () =>{
    const todos = useSelector(state => state.todos);

    const [todo,setTodo] = useState({do:''});

    const todoChangeHandler = (event)=>{
        const doValue = event.target.value;
        const newTodo ={
            do: doValue
        };
        setTodo(newTodo);
    }

    const dispatch = useDispatch();
    const createTodoHandler = ()=>{
        return dispatch(addTodo(todo))
    }

    const deleteTodoClickHandler =(index)=>{
        return dispatch(deleteTodo(index));
    }
    const toggleTodoDone = (todo)=>{
        return dispatch(todoDoneToggle(todo))
    }
    return (
        <>
        <h3>Todos</h3>
            <ul className={"list-group"}>
                <li className={"list-group-item"}>
                    <button onClick={createTodoHandler} className={"btn btn-primary w-25 float-end"}>Create</button>
                    <input onChange={todoChangeHandler} value={todo.do} className={"form-control w-75"}/>
                </li>
                {
                    todos.map(
                        (item,index) => <li key= {item._id}className={"list-group-item"}>
                            <button className={"btn btn-danger float-end ms-2"} onClick={()=>deleteTodoClickHandler(index)}>Delete</button>
                            <input className={"me-2"} type={"checkbox"} checked={item.done} onChange={()=>toggleTodoDone(item)}/>
                            {item.do}
                        </li>
                    )

                }
            </ul>
        </>
    );
}
export default Todos;