export const CompleteTodo = ({todos, onClickBackCompleteTodo}) => {
    return (
        <div className='complete-area'>
            <p className='title'>完了済のタスク</p>
            <ul>
                {/* <li>
            <div className='todo-low'>
              <p className='todo-item'>todo2</p>
              <button>戻す</button>
            </div>
          </li> */}
                {todos.filter(todo => todo.status === 'complete').map((todo) => (
                    <li key={todo.id}>
                        <div className='todo-low'>
                            <p className='todo-item'>{todo.text}</p>
                            <button onClick={onClickBackCompleteTodo.bind(null, todo.id)}>戻す</button>
                        </div>
                    </li>

                ))}
            </ul>
        </div>
    )
}