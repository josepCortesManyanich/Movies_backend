require('dotenv').config();
const axios = require('axios');
const mongoose = require('mongoose');
const Serie = require('../models/Series');
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
      const searchTerm = 'serie'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const seriesData = response.data.Search.map(elem => ({
          apiTitle: elem.Title,
          apiImage: elem.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot
        }));
        await Serie.insertMany(seriesData);
        
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
      const searchTerm = 'series'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const seriesData = response.data.Search.map(elem => ({
          apiTitle: elem.Title,
          apiImage: elem.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot
        }));
        await Serie.insertMany(seriesData);
        
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
      const searchTerm = 'disney'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const seriesData = response.data.Search.map(elem => ({
          apiTitle: elem.Title,
          apiImage: elem.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot
        }));
        await Serie.insertMany(seriesData);
        
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
      const searchTerm = 'game'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const seriesData = response.data.Search.map(elem => ({
          apiTitle: elem.Title,
          apiImage: elem.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot
        }));
        await Serie.insertMany(seriesData);
        
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
      const searchTerm = 'tv-series'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const seriesData = response.data.Search.map(elem => ({
          apiTitle: elem.Title,
          apiImage: elem.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot
        }));
        await Serie.insertMany(seriesData);
        
      } else {
        console.error(error);
      }
  
      console.log('CORRECTO');
    } catch (error) {
      console.error(error);
    } 
}

const seedData5 = async () => {
    try {
      const apiKey = 'ffdce154'; 
      const searchTerm = 'dragon ball'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        url: url
      }
      
      const response = await axios(options);
      if (response.data && response.data.Search) {
        const seriesData = response.data.Search.map(elem => ({
          apiTitle: elem.Title,
          apiImage: elem.Poster,
          apiYear: movie.Year,
          apiPlot: movie.Plot
        }));
        await Serie.insertMany(seriesData);
        
      } else {
        console.error(error);
      }
  
      console.log('CORRECTO');
    } catch (error) {
      console.error(error);
    } 
}
  
  seedData()
  seedData1()
  seedData2()
  seedData3()
  seedData4()
  seedData5()


 