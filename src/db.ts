import { initializeApp,cert, ServiceAccount } from 'firebase-admin/app';
import {getFirestore} from 'firebase-admin/firestore'
import {getDatabase} from 'firebase-admin/database'
import dotenv from 'dotenv'

dotenv.config()
console.log("ENV:", process.env.project_id)

const serviceAccount = {
    type: process.env.type,
    project_id: process.env.project_id,
    private_key_id: process.env.private_key_id,
    private_key: process.env.private_key?.replace(/\\n/g, '\n'),
    client_email: process.env.client_email,
    client_id: process.env.client_id,
    auth_uri: process.env.auth_uri,
    token_uri: process.env.token_uri,
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.client_x509_cert_url,
    universe_domain: process.env.universe_domain
} 
initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
databaseURL: "https://chat-8e9e9-default-rtdb.firebaseio.com"
});

const dbFirestore=getFirestore()
const dBase=getDatabase()
export {dbFirestore,dBase}