
import userRouter from './routers/users.js'
import chatsRouter from './routers/chatsroom.js'

import express, { type Express } from "express";
import cors from 'cors'


const app:Express = express();
const port = process.env.PORT || 3000;

app.use(cors())

app.use(express.json());

app.use('/users', userRouter)
app.use('/chats',chatsRouter)




app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});