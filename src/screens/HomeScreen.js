import React, { useEffect, useState } from 'react'

// UI
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { ListItem, Card, Button } from 'react-native-elements'

import { useDispatch, useSelector } from 'react-redux'
import { updateMovies } from '../store/actions/moviesAction'

export default function HomeScreen() {
  // settings
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateMovies('now_playing'))
  }, [])

  // state
  const [BASEURL_IMG] = useState('https://image.tmdb.org/t/p/w500')

  const { movies, favourites } = useSelector((state) => state.moviesReducers)
  console.log(movies)

  return (
    <SafeAreaView style={{ display: 'flex', width: '100%', height: '100%' }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'red' }}>
          {
            movies.length > 0 ?
              movies.map((movie, index) => {
                return (
                  <View style={{ margin: 5 }}>
                    <Image
                      key={index}
                      style={{ height: 150, width: 100, borderRadius: 10, marginBottom: 5 }}
                      source={{ uri: BASEURL_IMG + movie.poster_path }}
                    />
                    <Button
                      buttonStyle={{ borderRadius: 10, fontSize: 5 }}
                      title='Add to Like'
                      type='solid'
                    />
                  </View>
                )
              })
              : <Text>No movies to display</Text>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}