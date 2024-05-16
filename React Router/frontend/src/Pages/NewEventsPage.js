import { json, redirect } from 'react-router-dom';

import EventForm from '../components/EventForm'
function NewEventsPage(){
    function submitHandler(event){
event.preventDefault();
    }
    return(
    <>
    <h1>NewEventspage</h1>
    <EventForm />
    </>
        
    )
}
export default NewEventsPage;

export async function action({request, params}){
    const data= await request.FormData()
    const eventData = {
        title: data.get('title'),
         image: data.get('image'),
        description : data.get('description'),
        date: data.get('date')
    }
    const response = fetch('http://localhost:8080/events', 
    {method:'POST',
    headers: {'content-type':'application/json'},
     body: JSON.stringify(eventData)})

     if(!response.ok){
        throw json ({message:'couldnot save event'}, {status:500})
     }
     return redirect('/events')
}