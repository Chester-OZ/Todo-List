import TodoListItem from '../TodoListItem/TodoListItem'
import Grid from '../Grid/Grid'

export default function TodoList({ todos, deleteTodo, handleEditTodo }) {
  return (
    <Grid>
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <li key={todo.id}>
            <TodoListItem
              todo={todo}
              deleteTodo={deleteTodo}
              handleEditTodo={handleEditTodo}
              index={index + 1}
            />
          </li>
        ))
      ) : (
        <h3>There are no any todos...</h3>
      )}
    </Grid>
  )
}
