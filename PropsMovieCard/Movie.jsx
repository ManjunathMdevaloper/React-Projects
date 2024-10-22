import React from 'react'
import {moviedata} from './moviedata'
import './movie.css'
import MovieCard from './MovieCard'
const Movie = () => {
  return (
    <>
      <div className="movies">
        <div className="header">Movie Poster</div>
        <div className="block">
        {moviedata.map((ele)=>{
          let {id,movieName,actor,actress,image,rating,desc} = ele
          return(
            <>
              <MovieCard mId={id} mName={movieName} mActor={actor} mActress={actress} mImg={image} mRating={rating} mDesc={desc} />
            </>
          )
        })
        }
        </div>
      </div>
    </>
  )
}

export default Movie
