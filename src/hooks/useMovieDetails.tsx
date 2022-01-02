import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true, 
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async() => {
           
        const movieDetailsPromisse =  movieDB.get<MovieFull>(`${ movieId }`)
        const castPromisse = movieDB.get<CreditsResponse>(`${ movieId }/credits`);

        const [movieDetailResp, castPromisseResp] = await 
        Promise.all([
            movieDetailsPromisse, 
            castPromisse
        ])

        setState({
            isLoading: false, 
            movieFull: movieDetailResp.data,
            cast: castPromisseResp.data.cast
        })


    }

    useEffect(() => {
       
       getMovieDetails()
      
    }, [])

    return {
        ...state
    }

}