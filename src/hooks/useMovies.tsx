import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Movie, MovieDBResponse } from "../interfaces/movieInterface"

interface MoviesState {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upcoming: Movie[]
}
export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>()

    const getMovies = async() =>{
        const nowPlayingPromisse =   movieDB.get<MovieDBResponse>('/now_playing')
        const popularPrimisse    =   movieDB.get<MovieDBResponse>('/popular')
        const topRatedPromisse    =   movieDB.get<MovieDBResponse>('/top_rated')
        const upcomingPromisse    =   movieDB.get<MovieDBResponse>('/upcoming')

        const response = await Promise.all([
            nowPlayingPromisse,
            popularPrimisse,
            topRatedPromisse,
            upcomingPromisse
        ])

        setMoviesState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results,

        })

        setIsLoading(false)
    }

  
    



     useEffect(() => {
        getMovies()
     }, [])


     return {
         ...moviesState,
         isLoading,
     }
}


