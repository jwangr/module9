import express from 'express';
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { connectMongoose } from './dbConnect.js';

const app = express();
const port = process.env.PORT || 8080;

async function startServer() {
    await connectMongoose();
}

// parses requests of content-type application/json
app.use(express.json())

app.get('/', express.static('public'))
app.use('/api/users', userRoutes)

app.listen(port, () => {
    console.log(`Example app listening at
http://localhost:${port}`)
})

startServer();