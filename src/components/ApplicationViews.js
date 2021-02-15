import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"
import { GameForm } from "./game/GameForm.js"
import { EventList } from "./event/EventList.js"
import { EventProvider } from "./event/EventProvider.js"
import { EventForm } from "./event/EventForm.js"
import { ProfileProvider } from "./auth/ProfileProvider.js"
import { Profile } from "./auth/Profile.js"

export const ApplicationViews = (props) => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <GameProvider>
                <Route exact path="/" render={
                    props => <GameList {...props} />} />
                <Route exact path="/games/new" render={
                    props => <GameForm {...props} />} />
            </GameProvider>

            <EventProvider>
                <GameProvider>
                    <Route exact path="/events">
                        <EventList />
                    </Route>

                    <Route exact path="/events/new" render={
                        props => <EventForm {...props} />} />

                    <Route exact path="/events/new" render={
                        props => <EventForm {...props} />} />
                </GameProvider>
            </EventProvider>

            <ProfileProvider>
                <Route exact path="/profile">
                    <Profile />
                </Route>
            </ProfileProvider>


        </main>
    </>
}