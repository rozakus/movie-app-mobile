import React, { useEffect, useState } from 'react'

// UI
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Button, Icon, Text } from 'react-native-elements'

import { useDispatch, useSelector } from 'react-redux'
import { updateMovies, updateMovieDetail } from '../store/actions/moviesAction'

export default function HomeScreen({ navigation }) {
  // settings
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateMovies('now_playing'))
  }, [])

  // state
  const [BASEURL_IMG] = useState('https://image.tmdb.org/t/p/w500')
  const [category, setCategory] = useState('now_playing')

  const { movies, favourites } = useSelector((state) => state.moviesReducers)

  const handleMoviesCategory = (category) => {
    setCategory(category)
    dispatch(updateMovies(category))
  }

  const handleDetails = (movie) => {
    dispatch(updateMovieDetail(movie.id))
    return navigation.navigate('Detail')
  }

  return (
    <SafeAreaView style={{ display: 'flex', width: '100%', height: '100%' }}>
      <ScrollView>
        <View style={{ display: 'flex', alignItems: 'center', marginVertical: 10 }}>
          <Text h1>
            Movie App
          </Text>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10, paddingHorizontal: 30 }}>
          <Text h4>
            Category : 
          </Text>
          <Button
            buttonStyle={{ borderRadius: 10, paddingHorizontal: 20 }}
            onPress={() => handleMoviesCategory('now_playing')}
            title="now playing"
            type={category === 'now_playing' ? 'solid' : 'clear'}
          />
          <Button
            buttonStyle={{ borderRadius: 10, paddingHorizontal: 20 }}
            onPress={() => handleMoviesCategory('upcoming')}
            title="upcoming"
            type={category === 'upcoming' ? 'solid' : 'clear'}
          />
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {
            movies.length > 0 ?
              movies.map((movie, index) => {
                return (
                  <View style={{ margin: 5 }} key={index}>
                    <TouchableOpacity onPress={() => handleDetails(movie)}>
                      <Image
                        key={index}
                        style={{ height: 180, width: 120, borderRadius: 10, marginBottom: 5 }}
                        source={{ uri: BASEURL_IMG + movie.poster_path }}
                        onPress={() => console.log('detail')}
                      />
                    </TouchableOpacity>
                    <Button
                      buttonStyle={{ borderRadius: 10, fontSize: 5 }}
                      title='Like'
                      type='solid'
                      icon={{
                        name: "arrow-right",
                        size: 20,
                        color: "white"
                      }}
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