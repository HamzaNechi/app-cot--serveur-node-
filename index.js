import express from 'express';
import mongoose from 'mongoose';

import gameRoutes from './routes/game.js';
import userRoutes from './routes/user.js';
import achatRoutes from './routes/achat.js';

const app = express();
const port = process.env.PORT || 9090;
const databaseName = 'tpgame4sim1';


mongoose.set('debug', true);
mongoose.Promise = global.Promise;


mongoose
  .connect(`mongodb://localhost:27017/${databaseName}`)
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch(err => {
    console.log(err);
  });

app.use(express.json());

app.use('/game', gameRoutes);
app.use('/user',userRoutes);
app.use('/buy',achatRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});