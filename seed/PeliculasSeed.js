require('dotenv').config();
const axios = require('axios');
const mongoose = require('mongoose');
const Movie = require('../models/Movies');
const express = require('express')

mongoose.connect('mongodb://localhost:27017/Movies')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  })

  const seedData = async () => {
    try {
      const apiKey = 'ffdce154'; 
      const searchTerm = 'Action'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const moviesData = response.data.Search.map(movie => ({
          apiTitle: movie.Title,
          apiImage: movie.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot,
          apiGenre: movie.Genre,
          apiActors: movie.Actors
        }));
        await Movie.insertMany(moviesData);
        
      } else {
        console.error(error);
      }
  
      console.log('CORRECTO');
    } catch (error) {
      console.error(error);
    } 
  };

  const seedData1 = async () => {
    try {
      const apiKey = 'ffdce154'; 
      const searchTerm = 'Drama'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const moviesData = response.data.Search.map(movie => ({
          apiTitle: movie.Title,
          apiImage: movie.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot,
          apiGenre: movie.Genre,
          apiActors: movie.Actors
        }));
        await Movie.insertMany(moviesData);
        
      } else {
        console.error(error);
      }
  
      console.log('CORRECTO');
    } catch (error) {
      console.error(error);
    } 
  };
  const seedData2 = async () => {
    try {
      const apiKey = 'ffdce154'; 
      const searchTerm = 'movie'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const moviesData = response.data.Search.map(movie => ({
          apiTitle: movie.Title,
          apiImage: movie.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot,
          apiGenre: movie.Genre,
          apiActors: movie.Actors
        }));
        await Movie.insertMany(moviesData);
        
      } else {
        console.error(error);
      }
  
      console.log('CORRECTO');
    } catch (error) {
      console.error(error);
    }
  };
  const seedData3 = async () => {
    try {
      const apiKey = 'ffdce154'; 
      const searchTerm = 'sky'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const moviesData = response.data.Search.map(movie => ({
          apiTitle: movie.Title,
          apiImage: movie.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot,
          apiGenre: movie.Genre,
          apiActors: movie.Actors
        }));
        await Movie.insertMany(moviesData);
        
      } else {
        console.error(error);
      }
  
      console.log('CORRECTO');
    } catch (error) {
      console.error(error);
    } 
  };
  const seedData4 = async () => {
    try {
      const apiKey = 'ffdce154'; 
      const searchTerm = 'comedy'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const moviesData = response.data.Search.map(movie => ({
          apiTitle: movie.Title,
          apiImage: movie.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot,
          apiGenre: movie.Genre,
          apiActors: movie.Actors
        }));
        await Movie.insertMany(moviesData);
        
      } else {
        console.error(error);
      }
  
      console.log('CORRECTO');
    } catch (error) {
      console.error(error);
    } 
  };
  const seedData5 = async () => {
    try {
      const apiKey = 'ffdce154'; 
      const searchTerm = 'war'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const moviesData = response.data.Search.map(movie => ({
          apiTitle: movie.Title,
          apiImage: movie.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot,
          apiGenre: movie.Genre,
          apiActors: movie.Actors
        }));
        await Movie.insertMany(moviesData);
        
      } else {
        console.error(error);
      }
  
      console.log('CORRECTO');
    } catch (error) {
      console.error(error);
    }
  };
  const seedData6 = async () => {
    try {
      const apiKey = 'ffdce154'; 
      const searchTerm = 'harry'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const moviesData = response.data.Search.map(movie => ({
          apiTitle: movie.Title,
          apiImage: movie.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot,
          apiGenre: movie.Genre,
          apiActors: movie.Actors
        }));
        await Movie.insertMany(moviesData);
        
      } else {
        console.error(error);
      }
  
      console.log('CORRECTO');
    } catch (error) {
      console.error(error);
    } 
  };
  const seedData7 = async () => {
    try {
      const apiKey = 'ffdce154'; 
      const searchTerm = 'marvel'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const moviesData = response.data.Search.map(movie => ({
          apiTitle: movie.Title,
          apiImage: movie.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot,
          apiGenre: movie.Genre,
          apiActors: movie.Actors
        }));
        await Movie.insertMany(moviesData);
        
      } else {
        console.error(error);
      }
  
      console.log('CORRECTO');
    } catch (error) {
      console.error(error);
    } 
  };
  const seedData8 = async () => {
    try {
      const apiKey = 'ffdce154'; 
      const searchTerm = 'lord'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const moviesData = response.data.Search.map(movie => ({
          apiTitle: movie.Title,
          apiImage: movie.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot,
          apiGenre: movie.Genre,
          apiActors: movie.Actors
        }));
        await Movie.insertMany(moviesData);
        
      } else {
        console.error(error);
      }
  
      console.log('CORRECTO');
    } catch (error) {
      console.error(error);
    } 
  };

  const seedData9 = async () => {
    try {
      const apiKey = 'ffdce154'; 
      const searchTerm = 'king'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const moviesData = response.data.Search.map(movie => ({
          apiTitle: movie.Title,
          apiImage: movie.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot,
          apiGenre: movie.Genre,
          apiActors: movie.Actors
        }));
        await Movie.insertMany(moviesData);
        
      } else {
        console.error(error);
      }
  
      console.log('CORRECTO');
    } catch (error) {
      console.error(error);
    } 
  };
  const seedData10 = async () => {
    try {
      const apiKey = 'ffdce154'; 
      const searchTerm = 'queen'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const moviesData = response.data.Search.map(movie => ({
          apiTitle: movie.Title,
          apiImage: movie.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot,
          apiGenre: movie.Genre,
          apiActors: movie.Actors
        }));
        await Movie.insertMany(moviesData);
        
      } else {
        console.error(error);
      }
  
      console.log('CORRECTO');
    } catch (error) {
      console.error(error);
    }
  };
  const seedData11 = async () => {
    try {
      const apiKey = 'ffdce154'; 
      const searchTerm = 'bad'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const moviesData = response.data.Search.map(movie => ({
          apiTitle: movie.Title,
          apiImage: movie.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot,
          apiGenre: movie.Genre,
          apiActors: movie.Actors
        }));
        await Movie.insertMany(moviesData);
        
      } else {
        console.error(error);
      }
  
      console.log('CORRECTO');
    } catch (error) {
      console.error(error);
    } 
  };
  const seedData12 = async () => {
    try {
      const apiKey = 'ffdce154'; 
      const searchTerm = 'good'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const moviesData = response.data.Search.map(movie => ({
          apiTitle: movie.Title,
          apiImage: movie.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot,
          apiGenre: movie.Genre,
          apiActors: movie.Actors
        }));
        await Movie.insertMany(moviesData);
        
      } else {
        console.error(error);
      }
  
      console.log('CORRECTO');
    } catch (error) {
      console.error(error);
    } 
 
  };
  const seedData13 = async () => {
    try {
      const apiKey = 'ffdce154'; 
      const searchTerm = 'one piece'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const moviesData = response.data.Search.map(movie => ({
          apiTitle: movie.Title,
          apiImage: movie.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot,
          apiGenre: movie.Genre,
          apiActors: movie.Actors
        }));
        await Movie.insertMany(moviesData);
        
      } else {
        console.error(error);
      }
  
      console.log('CORRECTO');
    } catch (error) {
      console.error(error);
    } 
 
  };


  seedData()
  seedData1()
  seedData2()
  seedData3()
  seedData4()
  seedData5()
  seedData6()
  seedData7()
  seedData8()
  seedData9()
  seedData10()
  seedData11()
  seedData12()
  seedData13()

  


