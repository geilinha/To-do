import rocketLogo from '../assets/rocketLogo.svg'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocketLogo} alt="" />
            <h1>todo</h1>
        </header>
    )
}