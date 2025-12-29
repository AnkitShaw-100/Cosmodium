import express from 'express';
import authRoute from '../routes/auth.routes.js';
import foodPartnerRoute from '../routes/foodpartner.routes.js';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Welcome to my app" });
});

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/foodpartner', foodPartnerRoute);

export default app;