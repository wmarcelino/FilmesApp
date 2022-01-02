import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface';


interface Props {
    movie: Movie,
    height?: number,
    width?: number
}

export const MoviePoster = ({movie, height=420, width=300} : Props) => {


    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();

    console.log(movie.poster_path)
    return (
        <TouchableOpacity
            onPress={()=> navigation.navigate('DetailScreen', movie)}

            style ={{
            width, 
            height, 
            marginHorizontal: 8,
        }}>

            <View style={styles.imageContainer}>
                 <Image
                  source= {{uri}}
                  style={styles.posterImage}
                     />

            </View>
             
            
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    posterImage: {
        flex:1,
        borderRadius: 20,
    },
    imageContainer: {
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2, 
        },
        borderRadius: 18,
        shadowOpacity: 0.24, 
        shadowRadius: 3.84,
        elevation: 15,
    }
})