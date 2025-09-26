export const IncompleteTodo = ({ todos, onClickCompleteIncompleteTodo, onClickDeleteIncompleteTodo }) => {
    return (
        <div className='incomplete-area'>
            <p className='title'>未完了のタスク</p>
            <ul>
                {/* <li>
            <div className='todo-low'>
              <p className='todo-item'>todo1</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li> */}
                {todos.filter(todo => todo.status === 'incomplete').map((todo) => (
                    <li key={todo.id}>
                        <div className='todo-low'>
                            <p className='todo-item'>{todo.text}</p>
                            <button onClick={onClickCompleteIncompleteTodo.bind(null, todo.id)}>完了</button>
                            <button onClick={onClickDeleteIncompleteTodo.bind(null, todo.id)}>削除</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}