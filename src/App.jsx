import { useState } from 'react'
import './App.css'

export const App = () => {
  
  //入力されているtodoの文章を管理するステート
  const {todoText , setTodoText} = useState("todoTextの初期値");


  return (
    <>
      <h1>Todoアプリ</h1>
      <div className='input-area'>
        <input type="text" placeholder='TODO入力' value={todoText} />
        <button>追加</button>
      </div>
      <div className='incomplete-area'>
        <ul>
          <li>
            <div className='todo-low'>
              <p className='todo-item'>todo1</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className='complete-area'>
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

