export const InputTodo = ({todoText, onChangeTodoText, onCkickAddIncompleteTodo, isMaxTodoLimit}) => {
    return (
        <div className='input-area'>
            <input disabled={isMaxTodoLimit} type="text" placeholder='TODO入力' value={todoText} onChange={onChangeTodoText} />
            <button disabled={isMaxTodoLimit} onClick={onCkickAddIncompleteTodo}>追加</button>
        </div>
    )
}