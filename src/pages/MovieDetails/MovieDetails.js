import React, { useEffect } from 'react'
import { fetchMovieCast, fetchMovieDescription } from '../../store/movieDetailsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APISTATUS } from '../../utils/constant'

import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard'
import MovieCastCard from '../../components/MovieCastCard/MovieCastCard'
import Loader from '../../components/Loader/Loader'

import './MovieDetails.css'
import Error from '../../components/Error/Error'

function MovieDetails() {
    const dispatch = useDispatch()
    const { movieId } = useParams()
    const { cast, description, status } = useSelector((state) => state.movieDetails)
    useEffect(() => {
        dispatch(fetchMovieDescription(movieId))
        dispatch(fetchMovieCast(movieId))
    }, [dispatch])
    switch (status) {
        case APISTATUS.LOADING:
            return <Loader />
        case APISTATUS.IDLE:
            return (
                <div className='movie-details-container'>
                    <MovieDetailsCard description={description} />
                    <h1 className='movie-cast-title'>Cast</h1>
                    <ul className='movie-cast-list'>{cast?.cast?.map((cast) => <MovieCastCard key={cast.id} cast={cast} />)}</ul>
                </div>
            )
        case APISTATUS.ERROR:
            return <Error />
        default: return null
    }
}

export default MovieDetails