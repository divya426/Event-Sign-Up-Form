import EventsNavigation from '../components/EventsNavigation'

import { Outlet, useNavigation } from 'react-router-dom';
function EventsRoot(){
    const navigation= useNavigation()
    return(
        <>
        <EventsNavigation />
        <main>
        {navigation.state === 'loading' && <p>loading...</p>}
        <Outlet />
        </main>
        
        </>

    )
}
export default EventsRoot;