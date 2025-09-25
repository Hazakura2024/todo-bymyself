import { useState } from 'react'
import './App.css'

export const App = () => {


  return (
    <>
      <h1>文字</h1>
      <div className='input-area'>
        <input type="text" />
        <button>追加</button>
      </div>
      <div>
        <ul>
          <li>
            <div>
              <p>todo1</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <div>
              <p>todo2</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

