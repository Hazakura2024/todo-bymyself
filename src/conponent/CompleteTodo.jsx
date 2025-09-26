export const CompleteTodo = ({completeTodos, onClickBackCompleteTodo}) => {
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
                {completeTodos.map((todo, index) => (
                    <li key={todo.id}>
                        <div className='todo-low'>
                            <p className='todo-item'>{todo.text}</p>
                            <button onClick={onClickBackCompleteTodo.bind(null, index)}>戻す</button>
                        </div>
                    </li>

                ))}
            </ul>
        </div>
    )
}