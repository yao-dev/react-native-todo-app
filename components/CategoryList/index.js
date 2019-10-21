import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, LayoutAnimation, Platform, UIManager } from 'react-native';
import { connect } from 'react-redux';
import CategoryCard from '../CategoryCard';
import styles from './styles';

const { width } = Dimensions.get('window');

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CategoryList = (props) => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const categoriesCount = useRef(props.categories.length)
  const snapToOffsets = props.categories.map((i, index) => {
    if (!i) 0
    let marginHorizontal = 60
    return width * index - marginHorizontal;
  })

  useEffect(() => {
    let scrollToIndexSubscription;

    // SCROLL TO LAST CATEGORY WHEN A NEW ONE HAS BEEN ADDED
    if (categoriesCount.current !== props.categories.length) {
      let nextCategoryIndex = props.categories.length - 1;
      categoriesCount.current = props.categories.length;

      setCategoryIndex(nextCategoryIndex);

      scrollToIndexSubscription = setTimeout(() => {
        this.flatList.scrollToIndex({ index: nextCategoryIndex })
      }, 250)
      return;
    }

    return () => {
      clearTimeout(scrollToIndexSubscription)
    }
  })

  return (
    <FlatList
      ref={(node) => this.flatList = node}
      data={props.categories}
      extraData={props.categories}
      keyExtractor={item => item.id.toString()}
      onLayout={() => {}}
      renderItem={({ item }) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.bounce);
        return (
          <CategoryCard
            key={item.id}
            id={item.id}
            name={item.name}
          />
        )
      }}
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

        nextIndex = categoryIndex + nextIndex

        if (nextIndex >= 0 && nextIndex < props.categories.length) {
          setCategoryIndex(nextIndex);
          this.flatList.scrollToOffset({ offset: snapToOffsets[nextIndex], animated: true })
        }
      }}
    />
  )
}

export default connect(
  state => state,
)(CategoryList)
