import { observer } from 'mobx-react-lite'
import { EventItem } from '../EventItem/EventItem'
import styles from './styles.module.css'
import eventsStore from '../../stores/EventsStore'
import { FC } from 'react'
import { useRenderCount } from '../../hooks/useRenderCount'

interface IProp {
    handleClickOpen: () => void
}

export const EventList: FC<IProp> = observer(({ handleClickOpen }) => {
    const { events } = eventsStore
    const { activeCount } = useRenderCount('EventList')
    activeCount()

    return (
        <div className={styles.container}>
            {events.map(({ id, date }) => <EventItem key={id} id={id} date={date} handleClickOpen={handleClickOpen} />)}
        </div>
    )
})