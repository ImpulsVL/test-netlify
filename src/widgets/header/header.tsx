import { Button } from '@/shared/ui/Button'

import Logo from '../../shared/assets/icons/logo.svg'

import styles from './header.module.scss'

const Header = ({}) => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.buttons}>
        <Button
          buttonSize="large"
          mode="secondary"
          href="#"
        >Регистрация</Button>
        <Button buttonSize="large" href="#" >Вход</Button>
      </div>
    </header>
  )
}

export default Header
