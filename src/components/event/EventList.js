import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"
import { useHistory } from "react-router-dom"

export const EventList = (props) => {
    const { events, getEvents } = useContext(EventContext)
    const history = useHistory()
    useEffect(() => {
        getEvents()
    }, [])

    return (
        <article className="events">
            <header className="events__header">
                <h1>Level Up Game Events</h1>
            </header>
            {
                events.map(event => {
                    return <section key={event.id} className="registration">
                        <div className="registration__game">GAME NIGHT: {event.game.title}</div>
                        {/* <div>{event.description}</div> */}
                        <div>Where? {event.location}</div>
                        

                        <div>When? {
                                new Date().toLocaleDateString("en-US",
                                {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })
                                
                            }
                        </div>
                    </section>
                })
            }

        <button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
            history.push({ pathname: "/events/new" })
        }}
        >Register New Event</button>
        </article >
    )
}