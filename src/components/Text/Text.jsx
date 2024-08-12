import css from './Text.module.css'

export default function Text({ children }) {
  return <div className={css.title}>{children}</div>
}
