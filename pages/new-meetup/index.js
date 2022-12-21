import axios from "axios";
import React from "react";
import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
function NewMeetUpPage() {
  const router=useRouter()
  
  const addMeetUpHandler = async (enteredMeetUp)=>{
    const response = await fetch('/api/new-meetup',{
      method: 'POST',
      body: JSON.stringify(enteredMeetUp),
      headers:{
        'Content-Type':'application/json'
      }
    });

    const data = await response.json()
    console.log(data)
    router.push('/')

  }
  return (<>
<Layout>
<NewMeetupForm onAddMeetup={addMeetUpHandler}/>
</Layout>
  
  
  </>);
}

export default NewMeetUpPage;


