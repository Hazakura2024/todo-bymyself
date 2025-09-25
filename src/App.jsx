import { useState } from 'react'
import './App.css'

export const App = () => {

  //入力されているtodoの文章を管理するステート
  const [todoText, setTodoText] = useState("");

  //未完了のtodoを管理するステート
  const [incompleteTodos, setIncompleteTodos] = useState([])

  //todoの入力欄の文字が変更されたときに呼び出される関数
  //todoに入力された値を変更する
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);

  }

  //追加ボタンを押したときに呼び出される関数
  //incompleteTodosに入力されたtodoを追加する
  const addIncompleteTodo = () => {
    

    const newtodos = [...incompleteTodos, { id: Date.now(), text: todoText }]
    setIncompleteTodos(newtodos)

  }


  return (
    <>
      <h1>Todoアプリ</h1>
      <div className='input-area'>
        <input type="text" placeholder='TODO入力' value={todoText} onChange={onChangeTodoText} />
        <button onClick={addIncompleteTodo}>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のタスク</p>
        <ul>
          <li>
            <div className='todo-low'>
              <p className='todo-item'>todo1</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          {incompleteTodos.map((todo,index) => (
            <li key={todo.id}>
              <div className='todo-low'>
                <p className='todo-item'>{todo.text}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了済のタスク</p>
        <ul>
          <li>
            <div className='todo-low'>
              <p className='todo-item'>todo2</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

