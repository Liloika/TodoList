

export const InputTodo = (props) =>{
    return(
        <>
        <input value={props.todo}
            onChange={(e)=> props.setTodo(e.target.value)}/>
        <button onClick={()=> props.addTask() }>Добавить</button>
        </>
    )
}