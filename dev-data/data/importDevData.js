const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const settings = dotenv.config({ path: './config.env' });
const Tour = require('../../models/tourModel');

const DB = process.env.DATABASE_URI.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected successfully'));

// read the file
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// delete existing data
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Existing data deleted successfully');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// importing new data
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('New data successfully imported');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// passing the function as an argument on the command line using argv
if (process.argv[2] === '--delete') {
  deleteData();
} else if (process.argv[2] === '--import') {
  importData();
}
