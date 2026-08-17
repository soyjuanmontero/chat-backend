import express from 'express'
import { dBase } from '../db'
import { v4 as uuidv4 } from 'uuid';



const router=express.Router()

const chatsRef=dBase.ref('general')

router.post("/general",(req,res)=>{

const data =req.body
 chatsRef.push( data,(error)=>{
   if (error) {
      console.error('Error al crear el chat: ', error);
      return res.status(500).json({
        message: "Error al crear el chat",
        error: error.message
      });
    }
    console.log('Chat creado exitosamente!');
    res.status(201).json({
      message: "Chat creado"
    });
})
})

export default router