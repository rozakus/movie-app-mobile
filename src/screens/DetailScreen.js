import React, { useEffect, useState } from 'react'

// UI
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { ListItem, Card, Button } from 'react-native-elements'

import { useDispatch, useSelector } from 'react-redux'
import { updateMovies } from '../store/actions/moviesAction'

export default function DetailScreen() {
  // settings
  const dispatch = useDispatch()

  // state
  const [BASEURL_IMG] = useState('https://image.tmdb.org/t/p/w500')

  const { movieDetail } = useSelector((state) => state.moviesReducers)
  console.log(movieDetail)

  return (
    <SafeAreaView style={{ display: 'flex', width: '100%', height: '100%' }}>
      <ScrollView>
        <View style={{ flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={{ uri: BASEURL_IMG + movieDetail.poster_path }}
            style={{ height: 300, width: 200, borderRadius: 10 }}
          />
          <View>
            <Text>{movieDetail.original_title}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}