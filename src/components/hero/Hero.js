import React from 'react'
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({movies}) => {
    
  return (
    <div className='movie-carousel-container'>
        <Carousel>
            {
                movies && movies.length > 0 ? (movies.map((movie) => {
                
                    return(
                        <Paper>
                            <div className='movie-card-container'>
                                <div className='movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}>
                                    <div className='movie-detail'>
                                        <div className='movie-poster'>
                                            <img src={movie.poster} alt='' />
                                        </div>
                                        <div className='movie-title'>
                                            <h4>{movie.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                }) ) :<h2> Loading....</h2> 
            }
        </Carousel>
    </div>
  )
}

export default Hero