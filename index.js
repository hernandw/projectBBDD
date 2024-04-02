import express from 'express';
import router from './routes/routes.js';
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use('/', router);



app.listen(PORT, () => console.log(`Example app listening on port http://localhost:${PORT}`));