import { FiSearch } from 'react-icons/fi'
import css from './SearchForm.module.css'

export default function SearchForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const text = e.target.elements.search.value.trim()
    text && onSubmit(text)
    e.target.reset()
  }

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit">
          <FiSearch size="18px" />
        </button>

        <input
          className={css.input}
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
        />
      </form>
    </>
  )
}
