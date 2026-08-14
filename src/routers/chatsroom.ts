import express from 'express'
import { dBase } from '../db'
import { v4 as uuidv4 } from 'uuid';



const router=express.Router()

const chatsRef=dBase.ref('chatrooms')

router.post("/",(req,res)=>{
    const id=uuidv4();
const newChat=chatsRef.child(id)
newChat.set({
    type:"chat",
    id
})
.then(() => {
  console.log('Chat creado exitosamente!');
})
.catch((error) => {
  console.error('Error al crear el chat ', error);
});
  

  res.status(201).json({
    message:"Chat creado",
    id
  })
})

export default router