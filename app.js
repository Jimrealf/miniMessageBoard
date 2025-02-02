import express from 'express';
const app = express();
const PORT = 3000;
import indexRouter from './routes/index.js';

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
