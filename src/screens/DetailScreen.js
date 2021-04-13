import React, { useEffect, useState } from 'react'

// UI
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import { Button, Text, Rating } from 'react-native-elements'

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
    <SafeAreaView style={{ display: 'flex', width: '100%', height: '100%', backgroundColor: "#ffffff" }}>
      <ScrollView>
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 40 }}>
          <Image
            source={{ uri: BASEURL_IMG + movieDetail.poster_path }}
            style={{ height: 400, width: 280, borderRadius: 10 }}
          />
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 20, paddingHorizontal: 30 }}>
            <Text h4 style={{}}>{movieDetail.title}</Text>
            <Text h6 style={{ marginBottom: 10 }}>{movieDetail.tagline}</Text>
            <Rating readonly startingValue={movieDetail.vote_average / 2} imageSize={24} />
            <View style={{ marginTop: 20 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text h6 style={{ fontWeight: 'bold' }}>Released : </Text>
                <Text h6>{movieDetail.release_date}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text h6 style={{ fontWeight: 'bold' }}>Time : </Text>
                <Text h6 >{Math.floor(movieDetail.runtime / 60)} hours {movieDetail.runtime % 60 > 0 ? movieDetail.runtime % 60 : ''} minutes</Text>
              </View>
              <Text h6 style={{ fontWeight: 'bold' }}>Description :</Text>
              <Text h6>{movieDetail.overview} </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}