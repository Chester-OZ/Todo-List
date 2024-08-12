import css from './GridItem.module.css'

export default function GridItem({ children }) {
  return <div className={css.box}>{children}</div>
}
