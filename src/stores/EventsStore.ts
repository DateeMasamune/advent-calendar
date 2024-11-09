import { makeAutoObservable, runInAction } from "mobx";
import { events } from "../assets/events";

interface IEvents {
    id: number;
    date: Date;
    message?: string;
}


class EventsStore {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
    events: IEvents[] = events
    event: IEvents | null = null

    getCurrentEvent(eventId: number) {
        runInAction(() => {
            this.event = events.find(({ id }) => id === eventId) || null
        })
    }
}

const eventsStore = new EventsStore()
export default eventsStore