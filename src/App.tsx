import { Modal } from "./components/Modal/Modal"
import { useCallback, useState } from "react"
import { Header } from "./components/Header/Header"
import { useRenderCount } from "./hooks/useRenderCount"
import { EventList } from "./components/EventList/EventList"

export const App = () => {
  const [open, setOpen] = useState(false)
  const { activeCount } = useRenderCount('App')
  activeCount()

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Header />
      <EventList handleClickOpen={handleClickOpen} />
      <Modal open={open} handleClose={handleClose} />
    </>
  )
}
