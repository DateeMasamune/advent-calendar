import { observer } from "mobx-react-lite"
import { EventItem } from "./components/EventItem/EventItem"
import { Modal } from "./components/Modal/Modal"
import eventsStore from "./stores/EventsStore"
import styles from './styles.module.css'
import { useCallback, useState } from "react"

export const App = observer(() => {
  const [open, setOpen] = useState(false)
  const { events } = eventsStore

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${styles.snowblock}`}>
        <p className={styles.title}>
          ADVENT CALENDAR {new Date().getFullYear()} 💖
        </p>
      </header>
      <div className={styles.container}>
        {events.map(({ id, date }) => <EventItem key={id} id={id} date={date} handleClickOpen={handleClickOpen} />)}
        <Modal open={open} handleClose={handleClose} />
      </div>
    </>
  )
})
