import { useState } from 'react'
import './App.css'
import { InputTodo } from './conponent/InputTodo';
import { IncompleteTodo } from './conponent/IncompleteTodo';
import { CompleteTodo } from './conponent/CompleteTodo';

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
    //todoのidには時刻を指定
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
        <InputTodo todoText={todoText} onChangeTodoText={onChangeTodoText} onCkickAddIncompleteTodo={onCkickAddIncompleteTodo} />
        
        <IncompleteTodo incompleteTodos={incompleteTodos} onClickCompleteIncompleteTodo={onClickCompleteIncompleteTodo} onClickDeleteIncompleteTodo={onClickDeleteIncompleteTodo} />
        <CompleteTodo completeTodos={completeTodos} onClickBackCompleteTodo={onClickBackCompleteTodo} />
      </div>
    </>
  )
}

