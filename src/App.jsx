import { useState } from 'react'
import './App.css'

export const App = () => {

  //入力されているtodoの文章を管理するステート
  const [todoText, setTodoText] = useState("");

  //未完了のtodoを管理するステート
  const [incompleteTodos, setIncompleteTodos] = useState([])

  //完了済のtodoを管理するステート
  const [completeTodos, setCompleteTodos] = useState([])

  //todoの入力欄の文字が変更されたときに呼び出される関数
  //todoに入力された値を変更する
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);

  }

  //追加ボタンを押したときに呼び出される関数
  //incompleteTodosに入力されたtodoを追加する
  //余談、命名規則を統一したい
  const onCkickAddIncompleteTodo = () => {

    //何も入力されてないときに空白のtodoが追加されるのを防止
    if (todoText === "") {
      return;
    }

    //incompleteTodo配列に追加
    const newtodos = [...incompleteTodos, { id: Date.now(), text: todoText }]
    setIncompleteTodos(newtodos)

    //入力欄をクリア
    setTodoText("")

  }


  //削除ボタンを押したときに呼び出される関数
  //incompleteTodosからボタンを押されたtodoを削除する
  const onClickDeleteIncompleteTodo = (index) => {

    // alert();

    const newtodos = [...incompleteTodos]

    newtodos.splice(index, 1)

    setIncompleteTodos(newtodos)
  }


  //完了ボタンを押したときに呼び出される関数
  //completeTodosにボタンを押されたtodoを追加、incompleteTodosからボタンを押されたtodoを削除する
  const onClickCompleteIncompleteTodo = (index) => {
    // alert()

    const newincompletetodos = [...incompleteTodos]
    const newcompletetodos = [...completeTodos, incompleteTodos[index]]

    newincompletetodos.splice(index, 1)

    setIncompleteTodos(newincompletetodos)
    setCompleteTodos(newcompletetodos)


  }


  //戻すボタンが押したときに呼び出される関数
  //completeTodosにボタンを押されたtodoを追加、incompleteTodosからボタンを押されたtodoを削除する
  const onClickBackCompleteTodo = (index) => {

    const newincompletetodos = [...incompleteTodos, completeTodos[index]]
    const newcompletetodos = [...completeTodos]

    newcompletetodos.splice(index, 1)

    setIncompleteTodos(newincompletetodos)
    setCompleteTodos(newcompletetodos)
  }


  return (
    <>
      <div className='todo-app'>
        <h1 className='main-title'>Todoアプリ</h1>
        <div className='input-area'>
          <input type="text" placeholder='TODO入力' value={todoText} onChange={onChangeTodoText} />
          <button onClick={onCkickAddIncompleteTodo}>追加</button>
        </div>
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
            {incompleteTodos.map((todo, index) => (
              <li key={todo.id}>
                <div className='todo-low'>
                  <p className='todo-item'>{todo.text}</p>
                  <button onClick={onClickCompleteIncompleteTodo.bind(null, index)}>完了</button>
                  <button onClick={onClickDeleteIncompleteTodo.bind(null, index)}>削除</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
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
                  <button onClick={onClickBackCompleteTodo.bind(null,index)}>戻す</button>
                </div>
              </li>

            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

