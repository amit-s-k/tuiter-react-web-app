
import todos from "./todos.json"
import TodoItem from "./todo-item.js";

const TodoList = ()=>{
    return (
        <>

        <h3>Todo List</h3>
            <ul>
                {
                    todos.map(item => {
                        return (<TodoItem todo={item}></TodoItem>)
                    })
                }
            </ul>

        </>
    )
}
export default TodoList;