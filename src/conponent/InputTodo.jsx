export const InputTodo = ({todoText, onChangeTodoText, onCkickAddIncompleteTodo}) => {
    return (
        <div className='input-area'>
            <input type="text" placeholder='TODO入力' value={todoText} onChange={onChangeTodoText} />
            <button onClick={onCkickAddIncompleteTodo}>追加</button>
        </div>
    )
}