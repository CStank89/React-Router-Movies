import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

import SavedList from './Movies/SavedList'
import { Switch, Link,  Route } from 'react-router-dom'
import { Router } from 'express'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <Switch>
      <Router>
      <SavedList list={[ /* This is stretch */]} />
      {/* <Route path='/items-list/:id'>
          <Item items={stock} />
        </Route> */}
     
      <Route 
      path='/movies/:id'>
      <Movie 
      to={`/movies/${id}`} />  
      </Route>
      <Route 
      path='/' 
      component={MovieList}>
      </Route>
      </Router>
      </Switch>
      
    </div>
  );
}
