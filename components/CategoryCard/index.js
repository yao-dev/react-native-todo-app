import React, { useState } from 'react';
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import AddModal from '../AddModal';
import Task from '../Task';
import styles from './styles';

const CategoryCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View
        style={[styles.componentPaddingLeft, styles.header]}
      >
        <ImageBackground
          source={require('../../assets/header-1.jpg')}
          style={styles.headerImageBackground}
        />
        <Text style={styles.headerTitle}>{props.name}</Text>
      </View>
      {/* BODY */}
      <FlatList
        data={props.tasks}
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

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks.filter(i => i.categoryId === ownProps.id)
  }
}

export default connect(
  mapStateToProps,
)(CategoryCard)
