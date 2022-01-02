import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MoviePoster } from '../components/MoviePoster';
import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
export const DetailScreen = ({route}: Props) => {

    const movie = route.params
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;


    const { isLoading, cast, movieFull }  = useMovieDetails(movie.id)


    console.log(isLoading)

    return (
        <ScrollView>
            <View style={styles.imageContainer}> 
                <Image
                source={{uri}}
                style={styles.posterImage}
               >
               </Image>
             </View>
            <View style={styles.marginContainer}>
                <Text style={styles.title}>{movie.title}</Text> 
                <Text style={styles.subTitle}>{movie.original_title}</Text> 

            </View>

        <View style={{marginTop: 20}}>
         
         {
             isLoading 
             ?<ActivityIndicator size={30} color="grey" style={{marginTop: 20}}/>
             :<MovieDetails movieFull={movieFull!} cast = {cast}/>
         
         
        }
            
        
        </View>


        </ScrollView>
        
      
    )
}


const styles = StyleSheet.create({
    imageContainer: {
        overflow: 'hidden',
        width: '100%',
        height: screenHeight * 0.6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0, 
            height: 10,
        },
        shadowOpacity: 0.24, 
        shadowRadius: 7, 
        elevation: 9,
        borderBottomEndRadius: 25

    },
    posterImage: {
        flex:1,
    },
    marginContainer: {
        marginHorizontal: 20, 
        marginTop: 20
    },
    subTitle: {
        fontSize: 20, 
    },
    title: {
        fontSize: 26, 
        fontWeight: 'bold',
        opacity: 0.8
    }

})