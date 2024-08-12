import css from './Grid.module.css'

export default function Grid({ children }) {
  return <ul className={css.list}>{children}</ul>
}
