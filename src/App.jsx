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
  const onClickAddIncompleteTodo = () => {

    //何も入力されてないときに空白のtodoが追加されるのを防止
    if (todoText === "") {
      return;
    }

    //incompleteTodo配列に追加
    //todoのidには時刻を指定
    const newTodos = [...incompleteTodos, { id: Date.now(), text: todoText }]
    setIncompleteTodos(newTodos)

    //入力欄をクリア
    setTodoText("")

  }


  //削除ボタンを押したときに呼び出される関数
  //incompleteTodosからボタンを押されたtodoを削除する
  const onClickDeleteIncompleteTodo = (index) => {

    // alert();

    const newTodos = [...incompleteTodos]

    newTodos.splice(index, 1)

    setIncompleteTodos(newTodos)
  }


  //完了ボタンを押したときに呼び出される関数
  //completeTodosにボタンを押されたtodoを追加、incompleteTodosからボタンを押されたtodoを削除する
  const onClickCompleteIncompleteTodo = (index) => {
    // alert()

    const newIncompleteTodos = [...incompleteTodos]
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]

    newIncompleteTodos.splice(index, 1)

    setIncompleteTodos(newIncompleteTodos)
    setCompleteTodos(newCompleteTodos)


  }


  //戻すボタンが押したときに呼び出される関数
  //completeTodosにボタンを押されたtodoを追加、incompleteTodosからボタンを押されたtodoを削除する
  const onClickBackCompleteTodo = (index) => {

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    const newCompleteTodos = [...completeTodos]

    newCompleteTodos.splice(index, 1)

    setIncompleteTodos(newIncompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }

  const isMaxTodoLimit = incompleteTodos.length >= 5;

  return (
    <>
      <div className='todo-app'>
        <h1 className='main-title'>Todoアプリ</h1>
        <InputTodo todoText={todoText} onChangeTodoText={onChangeTodoText} onClickAddIncompleteTodo={onClickAddIncompleteTodo} isMaxTodoLimit={isMaxTodoLimit} />
        {/* 未完了のタスクの数の上限5個に設定 */}
        {isMaxTodoLimit && <h2 style={{textAlign: 'center',color: 'white'}}>追加できる未完了のタスクは5個までです!</h2>}
        <br />
        <IncompleteTodo incompleteTodos={incompleteTodos} onClickCompleteIncompleteTodo={onClickCompleteIncompleteTodo} onClickDeleteIncompleteTodo={onClickDeleteIncompleteTodo} />
        <CompleteTodo completeTodos={completeTodos} onClickBackCompleteTodo={onClickBackCompleteTodo} />
      </div>
    </>
  )
}

