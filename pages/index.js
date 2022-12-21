import React,{Fragment} from 'react'
import { MongoClient } from 'mongodb'
import MeetupList from "../components/meetups/MeetupList"
import Head from 'next/head'
import Layout from '../components/layout/Layout'

// const Dummy=[{
//     id:'m1',
//     title: "dasd",
//     adress:"adsda",
//     image: "https://cloud.mongodb.com/v2/6395a1e66acc361a6bca55be#metrics/replicaSet/6395a34b796423448b23521f/explorer/test/meetups/find",
//     description: "sads"
// }]
function HomePage(props) {
  return (
    <Fragment>
      <Layout>
        <Head>
            <title>React Meetups</title>
             <meta name='description'  content='Browse a huge React App'/>
        </Head>

         <MeetupList meetups={props.meetups}/>
         </Layout>
    </Fragment>

 
  )
}

export async function getStaticProps(){
    
const client = await MongoClient.connect('mongodb+srv://Feramiz:PhpZDbkfoC60J7LE@cluster0.xzpkke3.mongodb.net/?retryWrites=true&w=majority')
const db = client.db()
const meetupCollection=db.collection('meetups')
const meetups = await meetupCollection.find().toArray()
client.close()
return {
    props:{
        meetups: meetups.map((meetup)=>({
            title:meetup.title,
            address:meetup.address,
            image:meetup.image,
            id: meetup._id.toString()
        }))
    },
    revalidate:1
}
}

export default HomePage



