import express from 'express'
import { dbFirestore } from '../db'


const router=express.Router()

const usersRef=dbFirestore.collection('users')

router.post('/',(req,response)=>{
const data=req.body 
console.log(data)
const newUser=usersRef.doc()
newUser.set(data)

.then(() => {
  console.log('Documento creado exitosamente!');
})
.catch((error) => {
  console.error('Error al crear el documento: ', error);
});
  
const newObject={
  userId:newUser.id,
  ...data
}
console.log(newObject)
  response.status(201).json({
    message:"Producto creado",
    user:{
      userId:newUser.id,
      ...data,
    }
  })
})

export default router