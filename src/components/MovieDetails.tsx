import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Cast } from '../interfaces/creditsInterface'
import { MovieFull } from '../interfaces/movieInterface'
import { CastItem } from './CastItem'

interface Props { 
    movieFull: MovieFull;
    cast: Cast[]
}


export const MovieDetails = ({movieFull, cast}: Props) => {
    return (
        <View style={{marginHorizontal: 20}}>
            <View style={{flexDirection: 'row'}}> 
                 <Text>{'Avaliacao: '+ movieFull.vote_average}</Text> 
                <Text>
                    - {movieFull.genres.map(g => g.name).join(',')}
                </Text>
            </View>

            <Text style={{fontSize: 30, marginTop:10, fontWeight: 'bold'}}>
                Historia
            </Text>
            <Text>
                {movieFull.overview}
            </Text>

            <Text style={{fontSize: 30, marginTop:10, fontWeight: 'bold'}}>
                Valor gasto
            </Text>

            <Text>
                {movieFull.budget}
            </Text>

            <View style={{marginTop:30}}>
            <Text style={{fontSize: 30, marginTop:10, fontWeight: 'bold'}}>
                Atores       
            </Text>
                
                <FlatList
                    horizontal={true}
                    data={cast}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={( {item})=> <CastItem actor={item}/>}
                />



            </View>




















        </View>
    )
}
