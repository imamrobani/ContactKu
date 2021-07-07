import React, { useEffect } from 'react'
import { Animated, View, FlatList, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { IcHomeOn } from '../../assets'
import { Header, CardContact, AddButton, EmptyContact } from '../../components'
import { getContact } from '../../redux/action/contact'
import Styles from './Styles'

const { height } = Dimensions.get("window")

const SPACING = 16
const IMAGE_SIZE = 72
const ITEM_SIZE = IMAGE_SIZE + SPACING * 3

const ListContact = ({ navigation }) => {
  const dispatch = useDispatch()
  const { contact } = useSelector(state => state.contactReducer)

  const scrollY = React.useRef(new Animated.Value(0)).current

  useEffect(() => {
    dispatch(getContact())
  }, [])

  return (
    <View style={Styles.screen}>
      <Header label="List Contact" />
      <View style={Styles.listContainer}>
        <Animated.FlatList
          data={contact}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item, index }) => {

            const position = Animated.subtract(index * ITEM_SIZE, scrollY);
            const isDisappearing = -ITEM_SIZE;
            const isTop = 0;
            const isBottom = height - ITEM_SIZE;
            const isAppearing = height;
            const translateY = Animated.add(
              Animated.add(
                scrollY,
                scrollY.interpolate({
                  inputRange: [0, 0.00001 + index * ITEM_SIZE],
                  outputRange: [0, -index * ITEM_SIZE],
                  extrapolateRight: "clamp",
                })
              ),
              position.interpolate({
                inputRange: [isBottom, isAppearing],
                outputRange: [0, -ITEM_SIZE / 4],
                extrapolate: "clamp",
              })
            );

            const scale = position.interpolate({
              inputRange: [isDisappearing, isTop, isBottom, isAppearing],
              outputRange: [0.5, 1, 1, 0.5],
              extrapolate: "clamp",
            });

            const opacity = position.interpolate({
              inputRange: [isDisappearing, isTop, isBottom, isAppearing],
              outputRange: [0.5, 1, 1, 0.5],
            });

            return (
              <Animated.View style={{ opacity, transform: [{ translateY }, { scale }] }}>
                <CardContact data={item} />
              </Animated.View>
            )
          }}
        />
      </View>
      <View style={Styles.buttonContainer}>
        <AddButton onPress={() => navigation.navigate('AddContact')} />
      </View>
    </View>
  )
}

export default ListContact