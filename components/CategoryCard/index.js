import React, { useState } from 'react';
import { Dimensions, FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import AddModal from '../AddModal';
import Task from '../Task';
import container from './container';
import styles from './styles';

const { width } = Dimensions.get('window');

const CategoryCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View
        style={[styles.componentPaddingLeft, styles.header]}
      >
        <ImageBackground
          source={{ uri: `https://picsum.photos/200/100`}}
          style={styles.headerImageBackground}
        />
        <Text style={styles.headerTitle}>{props.name}</Text>
      </View>
      {/* BODY */}
      <FlatList
        data={props.tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Task
              key={item.id}
              {...item}
            />
          )
        }}
        contentContainerStyle={[styles.body]}
        showsVerticalScrollIndicator={false}
      />
      {/* FOOTER */}
      <TouchableOpacity
        onPress={() => setModalOpen(true)}
        style={styles.footer}
      >
        <Text style={styles.addText}>+ add task</Text>
      </TouchableOpacity>

      <AddModal
        type='task'
        open={modalOpen}
        categoryId={props.id}
        close={() => setModalOpen(false)}
      />
    </View>
  )
}

export default container(CategoryCard)
