import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import EventDetailPage, {loader as eventDetailsLoader} from './Pages/EventDetailsPage';
import NewEventsPage,  {action as newEventAction}from './Pages/NewEventsPage';
import EditEvent from './Pages/EditEvent';
import EventsPage , {loader as eventLoader} from './Pages/EventsPage';
import Root from './Pages/Root';
import EventsRoot from './Pages/EventsRoot';
import Error from './Pages/Error';

const router= createBrowserRouter([
  {path:'/', element: <Root/>, errorElement:<Error/>, children:[
    {path:'', element:<HomePage />},
    {path:'events', element:<EventsRoot/>,  
    children:[
      {index:true, element:<EventsPage />, loader : eventLoader },
      {path:':eventId', id:'event-detail', loader:eventDetailsLoader,  children: [
        {index:true, element:<EventDetailPage/>,},
        {path:':eventId/edit', element:<EditEvent/>} 
        
      ]},
      
      {path:'new', element:<NewEventsPage/>, action:newEventAction},
     
    ]},
    
  ]},
  
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
