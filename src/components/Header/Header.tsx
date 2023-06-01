import { Link } from 'react-router-dom'
import classes from './Header.module.scss'

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to='/' className={classes.link}>Home</Link>
        <Link to='/todo' className={classes.link}>ToDo</Link>
      </div>
    </header>
  )
}