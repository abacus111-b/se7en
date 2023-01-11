const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const settings = dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE_URI.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB connection is successful👍🏽`))
  .catch((error) => console.log('Houston, we got a problem!!!🚒'));
mongoose.set('strictQuery', true);
console.log(app.get('env')); // this logs the current stage of the api
const PORT = process.env.PORT || 6001;
app.listen(PORT, (req, res) => {
  console.log(`Server can hear you at port ${PORT}, ride on...`);
});
