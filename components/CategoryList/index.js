import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Platform } from 'react-native';
import { connect } from 'react-redux';
import CategoryCard from '../CategoryCard';
import styles from './styles';

const { width } = Dimensions.get('window')

const CategoryList = (props) => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const snapToOffsets = props.categories.map((i, index) => {
    return (width * (index + 1)) - (60 * (index + 1))
  })

  useEffect(() => {
    if (props.categories.length && categoryIndex < props.categories.length) {
      this.flatList.scrollToIndex({ index: categoryIndex, animated: true })
    }
  })

  return (
    <FlatList
      ref={(node) => this.flatList = node}
      data={props.categories}
      extraData={props.categories}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <CategoryCard
          key={item.id}
          id={item.id}
          name={item.name}
        />
      )}
      contentContainerStyle={styles.flatList}
      showsHorizontalScrollIndicator={false}
      horizontal
      nestedScrollEnabled
      pagingEnabled
      snapToOffsets={snapToOffsets}
      decelerationRate='fast'
      onScrollEndDrag={(e) => {
        let nextIndex;

        if (Platform.OS == 'ios') {
          nextIndex = e.nativeEvent.velocity.x > 0 ? 1 : -1;
        } else {
          nextIndex = e.nativeEvent.velocity.x < 0 ? 1 : -1;
        }

        setCategoryIndex(categoryIndex + nextIndex)
      }}
    />
  )
}

export default connect(
  state => state,
)(CategoryList)
