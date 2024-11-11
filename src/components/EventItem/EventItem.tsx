import { FC, memo, useCallback } from 'react'
import styles from './styles.module.css'
import eventsStore from '../../stores/EventsStore';
import { useRenderCount } from '../../hooks/useRenderCount';

interface IProps {
    date: Date;
    id: number;
    handleClickOpen: () => void
}

export const EventItem: FC<IProps> = memo(({ date, id, handleClickOpen }) => {
    const { activeCount } = useRenderCount('EventItem')
    activeCount()
    const localDate = `${date.getDate()}.${date.getMonth() + 1}`
    const isDisabled = Date.now() <= date.getTime()
    const className = isDisabled ? `${styles.container} ${styles.disabled}` : styles.container
    const handleClik = useCallback((eventId: number) => {
        eventsStore.getCurrentEvent(eventId)
        if (!isDisabled) {
            handleClickOpen()
        }
    }, [handleClickOpen, isDisabled])

    return (
        <div className={className} onClick={() => handleClik(id)}>
            <h2 className={styles.title}>{localDate}</h2>
            <div className={styles.handle} />
        </div>
    )
})