require('dotenv').config();
const axios = require('axios');
const mongoose = require('mongoose');
const Movie = require('../models/Movie');

mongoose.connect('mongodb://localhost:27017/Movies')
  .then(() => {
    console.log('Connected to MongoDB');
    data();
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

const data = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
      params: {
        language: 'en-US',
        page: 1
      },
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDMyNTc0YTQzZTMyZTAwNGFmNWVhMmJjZDU5MjdlZiIsInN1YiI6IjY2MTFhYjgzMTEwOGE4MDE2NDhjN2VlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sVMODQOs97ekq4hGuXhLckNoM4_OM9Fj9yqomyzwcZ4'
      }
    });

    const response1 = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
      params: {
        language: 'en-US',
        page: 1
      },
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDMyNTc0YTQzZTMyZTAwNGFmNWVhMmJjZDU5MjdlZiIsInN1YiI6IjY2MTFhYjgzMTEwOGE4MDE2NDhjN2VlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sVMODQOs97ekq4hGuXhLckNoM4_OM9Fj9yqomyzwcZ4'
      }
    });

   
    await Movie.insertMany(response.data.results);
    await Movie.insertMany(response1.data.results);

    console.log('CORRECTO');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
};