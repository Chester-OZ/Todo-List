import EditForm from 'components/EditForm/EditForm'
import SearchForm from 'components/SearchForm/SearchForm'
import TodoList from 'components/TodoList/TodoList'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import css from './Todos.module.css'

export default function Todos() {
  const getTodosLS = () => {
    const savedTodos = localStorage.getItem('savedTodos')
    return savedTodos !== null ? JSON.parse(savedTodos) : []
  }

  const [todos, setTodos] = useState(getTodosLS)
  const [isEditing, setIsEditing] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({})

  useEffect(() => {
    localStorage.setItem('savedTodos', JSON.stringify(todos))
  }, [todos])

  const findTodo = (text) => {
    return todos.some((todo) => todo.text.toLowerCase() === text.toLowerCase())
  }

  const addTodo = (text) => {
    const newTodo = { text, id: nanoid() }
    findTodo(text)
      ? alert('Todo вже існує')
      : setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const handleEditTodo = (todo) => {
    setIsEditing(true)
    setCurrentTodo(todo)
  }

  const cancelUpdate = () => {
    setIsEditing(false)
    setCurrentTodo({})
  }

  const updateTodo = (text) => {
    findTodo(text)
      ? alert('Todo вже існує')
      : setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === currentTodo.id ? { ...todo, text } : todo
          )
        )

    setIsEditing(false)
    setCurrentTodo({})
  }

  return (
    <div className={css.container}>
      <h1 className={css.title}>Todos</h1>
      {isEditing ? (
        <EditForm
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo.text}
        />
      ) : (
        <SearchForm onSubmit={addTodo} />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </div>
  )
}
