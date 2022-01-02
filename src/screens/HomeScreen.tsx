import { useNavigation } from '@react-navigation/core'
import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Button, Dimensions, FlatList, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import ImageColors from 'react-native-image-colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import movieDB from '../api/movieDB';
import { GradientBackground } from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradiantContext';

const { width: windowWidth} = Dimensions.get('window')

export const HomeScreen = () => {


    const { nowPlaying, isLoading, popular, topRated, upcoming} = useMovies();

    const { top } = useSafeAreaInsets();
    const { setMainColors } = useContext ( GradientContext)


    useEffect(() => {
        if ( nowPlaying?.length > 0) {
            getPosterColors(0)
        }
    }, [nowPlaying])

    const getPosterColors = async (index: number)=> {
        const movie = nowPlaying[index]
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

        const [primary, secondary] = await getImageColors(uri)

        setMainColors({primary, secondary })
        
        console.log(primary, secondary)
    }

    if ( isLoading )
        return (
            <View style = {{flex:1, justifyContent: 'center', alignContent: 'center'}}> 
                <ActivityIndicator color="red" size={ 50} />
            </View>
        )

    return (

        <GradientBackground>
        <ScrollView>
                <View style = {{marginTop: top + 20}}>

          <View style={{height: 400}}>
              <Carousel
               data={nowPlaying!}
              renderItem={({item}: any) => <MoviePoster movie={item}></MoviePoster> }
              sliderWidth= { windowWidth }
              itemWidth= {300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
        </View>
        <HorizontalSlider
            title="Filmes Populares"
            movies = {popular!}
        />

        <HorizontalSlider
            title="Top Rated"
            movies = {topRated!}
        />

        <HorizontalSlider
            title="Em breve"
            movies = {upcoming!}
        />

            </View>
       </ScrollView> 
       
        </GradientBackground>

     
    )
}
