import { RiDeleteBinLine } from 'react-icons/ri'
import { RiEdit2Line } from 'react-icons/ri'
import css from './TodoListItem.module.css'
import GridItem from '../GridItem/GridItem'
import Text from 'components/Text/Text'

export default function TodoListItem({
  todo,
  deleteTodo,
  handleEditTodo,
  index,
}) {
  return (
    <>
      <GridItem>
        <div className={css.box}>
          <Text className={css.title}>TODO #{index}</Text>
          <Text>{todo.text}</Text>

          <button
            className={css.deleteButton}
            type="button"
            onClick={() => deleteTodo(todo.id)}
          >
            <RiDeleteBinLine size={20} />
          </button>
          <button
            className={css.editButton}
            type="button"
            onClick={() => handleEditTodo(todo)}
          >
            <RiEdit2Line size={20} />
          </button>
        </div>
      </GridItem>
    </>
  )
}
