import { RiSaveLine } from 'react-icons/ri'
import { MdOutlineCancel } from 'react-icons/md'
import css from './EditForm.module.css'

export default function EditForm({ updateTodo, cancelUpdate, defaultValue }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()
    text && updateTodo(text)
  }

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.submitButton} type="submit">
          <RiSaveLine color="green" size="18px" />
        </button>

        <button className={css.editButton} type="button" onClick={cancelUpdate}>
          <MdOutlineCancel color="red" size="18px" />
        </button>

        <input
          className={css.input}
          placeholder="What do you want to write?"
          name="text"
          required
          defaultValue={defaultValue}
          autoFocus
        />
      </form>
    </div>
  )
}
