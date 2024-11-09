import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material"
import { observer } from "mobx-react-lite";
import { FC } from "react";
import eventsStore from "../../stores/EventsStore";

interface IProps {
    open: boolean
    handleClose: () => void
}

export const Modal: FC<IProps> = observer(({ open, handleClose }) => {
    const { event } = eventsStore
    const { message } = event || {}

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                Поздравляю тебя с новым днем advent календаря ❤️
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Закрыть
                </Button>
            </DialogActions>
        </Dialog>
    )
})