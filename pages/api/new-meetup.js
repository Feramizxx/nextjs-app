import {MongoClient} from 'mongodb'


async function handler(req,res){
if(req.method==="POST"){
const data = req.body;
// const{title,image,adress,description}=data

const client = await MongoClient.connect('mongodb+srv://Feramiz:PhpZDbkfoC60J7LE@cluster0.xzpkke3.mongodb.net/?retryWrites=true&w=majority')
const db = client.db()
const meetupCollection=db.collection('meetups')
const result = await meetupCollection.insertOne(data)
console.log(result)
client.close()

res.status(201).json({message:"message inserted"})
}
}

export default handler;