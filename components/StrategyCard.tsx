import { Text, View, Image } from 'react-native'
import React from 'react'
import { Strategy } from '@utils/types/types'
import BookmarkStrategy from './BookmarkStrategy'



const StrategyCard = ({strategy} : {strategy : Strategy}) => {

  return (
    <View
      key={strategy.strategyId}
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
      }}>
      <Image
        style={{
          height: 70,
          width: 70,
          margin: 10,
          borderRadius: 25,
        }}
        source={typeof(strategy.image) === 'string' ? {uri: strategy.image} : strategy.image}
        alt={strategy.title}
      />

      <Text
        style={{ fontSize: 22, fontWeight: "500", marginHorizontal: 4, flex: 1}}>
        {strategy.title}
      </Text>
      
      <BookmarkStrategy key={strategy.strategyId} strategy_id={strategy.strategyId}/>
    </View>
  )
}

export default StrategyCard