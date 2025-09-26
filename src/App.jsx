import { useState } from 'react'
import './App.css'
import { InputTodo } from './components/InputTodo';
import { IncompleteTodo } from './components/IncompleteTodo';
import { CompleteTodo } from './components/CompleteTodo';

export const App = () => {

  //入力されているtodoの文章を管理するステート
  const [todoText, setTodoText] = useState("");

  // //未完了のtodoを管理するステート
  // const [incompleteTodos, setIncompleteTodos] = useState([])

  // //完了済のtodoを管理するステート
  // const [completeTodos, setCompleteTodos] = useState([])

  //TODOを管理するステートを一つに統一
  const [todos, setTodos] = useState([])

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
    const newTodos = [...todos, { id: Date.now(), status: 'incomplete', text: todoText }]
    setTodos(newTodos)

    //入力欄をクリア
    setTodoText("")

  }


  //削除ボタンを押したときに呼び出される関数
  //incompleteTodosからボタンを押されたtodoを削除する
  const onClickDeleteIncompleteTodo = (id) => {

    // alert();

    // const newTodos = [...incompleteTodos]

    // newTodos.splice(index, 1)

    // setIncompleteTodos(newTodos)


    //indexではなくidで管理する
    //値ではなく更新関数を渡す
    //Reactのステート更新関数に値を直接渡す代わりに関数を渡すと、その関数はReactによって特別な引数を受け取ります。
    setTodos(todos => todos.filter((todo) => (todo.id !== id)))


  }


  //完了ボタンを押したときに呼び出される関数
  //completeTodosにボタンを押されたtodoを追加、incompleteTodosからボタンを押されたtodoを削除する
  const onClickCompleteIncompleteTodo = (id) => {
    // alert()

    // const newIncompleteTodos = [...incompleteTodos]
    // const newCompleteTodos = [...completeTodos, incompleteTodos[index]]

    // newIncompleteTodos.splice(index, 1)

    // setIncompleteTodos(newIncompleteTodos)
    // setCompleteTodos(newCompleteTodos)

    //idで管理するようにする

    // //一度新しい配列を宣言するパターン
    // //incompleteTodos.filter((todo) => (todo.id === id))自体は要素数1の配列、その中身を出すには...構文
    // const newCompleteTodos = [...completeTodos, ...incompleteTodos.filter((todo) => (todo.id === id))]

    // //更新関数を直で渡すパターン
    // setIncompleteTodos(incompleteTodos => incompleteTodos.filter((todo) => (todo.id !== id)))

    // setCompleteTodos(newCompleteTodos)

    setTodos(todos => todos.map((todo) => {
      if (todo.id === id) {
        return {id: todo.id, status: "complete", text: todo.text}
      } else {
        return todo
      }
    }))
  }


  //戻すボタンが押したときに呼び出される関数
  //completeTodosにボタンを押されたtodoを追加、incompleteTodosからボタンを押されたtodoを削除する
  const onClickBackCompleteTodo = (id) => {

    // const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    // const newCompleteTodos = [...completeTodos]

    // newCompleteTodos.splice(index, 1)

    // setIncompleteTodos(newIncompleteTodos)
    // setCompleteTodos(newCompleteTodos)


    //idで管理
    //
    // const newIncompleteTodos = [...incompleteTodos, ...completeTodos.filter((todo) => (todo.id === id))]

    // setCompleteTodos(completeTodos => completeTodos.filter((todo) => (todo.id !== id)))

    // setIncompleteTodos(newIncompleteTodos)
    setTodos(todos => todos.map((todo) => {
      if (todo.id === id) {
        return {id: todo.id, status: "incomplete", text: todo.text}
      } else {
        return todo
      }
    }))
  }

  const isMaxTodoLimit = todos.filter(todo => todo.status === "incomplete").length >= 5;

  return (
    <>
      <div className='todo-app'>
        <h1 className='main-title'>Todoアプリ</h1>
        <InputTodo todoText={todoText} onChangeTodoText={onChangeTodoText} onClickAddIncompleteTodo={onClickAddIncompleteTodo} isMaxTodoLimit={isMaxTodoLimit} />
        {/* 未完了のタスクの数の上限5個に設定 */}
        {isMaxTodoLimit && <h2 style={{ textAlign: 'center', color: 'white' }}>追加できる未完了のタスクは5個までです!</h2>}
        <br />
        <IncompleteTodo todos={todos} onClickCompleteIncompleteTodo={onClickCompleteIncompleteTodo} onClickDeleteIncompleteTodo={onClickDeleteIncompleteTodo} />
        <CompleteTodo todos={todos} onClickBackCompleteTodo={onClickBackCompleteTodo} />
      </div>
    </>
  )
}

