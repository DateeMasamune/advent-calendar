import { memo } from 'react'
import { useRenderCount } from '../../hooks/useRenderCount'
import styles from './styles.module.css'

export const Header = memo(() => {
    const { activeCount } = useRenderCount('Header')
    activeCount()

    return (
        <header className={`${styles.header} ${styles.snowblock}`}>
            <p className={styles.title}>
                ADVENT CALENDAR {new Date().getFullYear()} 💖
            </p>
        </header>
    )
})