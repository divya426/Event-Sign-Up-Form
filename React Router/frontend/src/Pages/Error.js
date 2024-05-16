import PageContent from "../components/PageContent";
import {useRouteError} from 'react-router-dom'
function Error(){
    const error= useRouteError()
    let title ='an error occured'
    let message = 'Something went wrong'
    if (error.status === 500){
        message =error.data.message;
        title = 'Something went wrong'
    }
    if(error.status === 400){
        message =error.data.message;
        title = 'Couldnt find page or resource'
    }
    return(
        <>
        <PageContent title="an error occured" children={message}>
            
        </PageContent>
        </>
    )

}
export default Error;