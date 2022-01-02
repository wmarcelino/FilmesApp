import React from 'react'
import { Image, Text, View } from 'react-native'
import { Cast } from '../interfaces/creditsInterface';


interface Props {
    actor: Cast
}

export const CastItem = ({actor}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;


    return (
        <View style={{flexDirection: 'row'}}>
            {
                actor.profile_path && (

                    <Image
                    style={{width:50, height:50, borderRadius:10}}
                    source={{uri}}
                    
                />
                )
            }
            

            <View>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name}</Text>
                 <Text style={{fontSize: 16, color:'grey'}}>{actor.character}</Text>
            </View>
            
          

        </View>
    )
}
