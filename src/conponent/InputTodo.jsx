export const InputTodo = ({todoText, onChangeTodoText, onClickAddIncompleteTodo, isMaxTodoLimit}) => {
    return (
        <div className='input-area'>
            <input disabled={isMaxTodoLimit} type="text" placeholder='TODO入力' value={todoText} onChange={onChangeTodoText} />
            <button disabled={isMaxTodoLimit} onClick={onClickAddIncompleteTodo}>追加</button>
        </div>
    )
}