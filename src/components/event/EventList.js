import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider.js"
import { useHistory } from "react-router-dom"

export const EventList = (props) => {
    const { events, getEvents, joinEvent, leaveEvent } = useContext(EventContext)
    const [toggle, setToggle]=useState(false)
    const history = useHistory()
    useEffect(() => {
        getEvents()
    }, [])

    return (
        <>
        <article className="events">
            <header className="events__header">
                <h1>Level Up Game Events</h1>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/events/new" })
                    }}
                >Schedule New Event</button>
            </header>
            {
                events.map(event => {
                    const attending = events.some(evt => evt.id === event.id)
                    return <section key={event.id} className="registration">
                        
                        <div className="registration__game">GAME NIGHT: {event.game.title}</div>

                        <div>{event.description}</div>
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

                        {
                            event.joined
                                ? <button className="btn btn-3"
                                    onClick={() => {
                                        leaveEvent(event.id).then(setToggle)}}
                                    >Leave</button>
                                : <button className="btn btn-2"
                                    onClick={() => {
                                        joinEvent(event.id).then(setToggle)}}
                                    >Join</button>
                        }
                    </section>
                })
            }
        </article >
        </>
    )
}

{/* <article className="events">
            <header className="events__header">
                <h1>Level Up Game Events</h1>
            </header>
            {
                events.map(event => {
                    return <section key={event.id} className="registration">
                        <div className="registration__game">GAME NIGHT: {event.game.title}</div>
                        <div>{event.description}</div> 
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
        </article > */}