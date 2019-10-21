import Icon from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { Modal, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { connect } from 'react-redux';
import styles from './styles';

const AddModal = (props) => {
  const [newName, setName] = useState('');
  const [categoryId, setCategoryId] = useState(props.categoryId);

  return (
    <Modal
      animationType='slide'
      transparent={false}
      visible={props.open}
    >
      <StatusBar barStyle='dark-content' />

      {/* MODAL BODY */}
      <View
        style={[
          styles.componentPaddingLeft,
          styles.componentPaddingRight,
          styles.modalBody,
        ]}
      >

        {/* CLOSE/RETURN ICON */}
        <TouchableOpacity
          onPress={props.close}
          style={styles.closeModalIconContainer}
        >
          <Icon name='arrow-back' size={40} color='#303030' />
        </TouchableOpacity>

        <View style={[styles.componentPaddingLeft, styles.componentPaddingRight]}>

          {/* TITLE */}
          <Text style={styles.modalTitle}>Add {props.type}</Text>

          {/* ADD TASK/CATEGORY INPUT */}
          <TextInput
            placeholder={`Type your ${props.type}`}
            placeholderTextColor='#303030'
            onChangeText={(name) => setName(name)}
            style={styles.addTypeInput}
          />

          {/* ONLY FOR TASK TYPE */}
          {props.isTaskType && (
            <>
              {/* <ModalDropdown
                defaultIndex={props.defaultCategoryIndex}
                defaultValue='Select a category'
                options={props.categories.map(i => i.name)}
                showsVerticalScrollIndicator={false}
                onSelect={(i) => {
                  console.log(i)
                }}
              /> */}
              <Dropdown
                label='Select a category'
                data={props.categories}
                value={props.categories[props.defaultCategoryIndex].name}
                valueExtractor={({ id }) => id }
                labelExtractor={({ name }) => name }
                onChangeText={(id) => {
                  setCategoryId(id)
                }}
              />
            </>
          )}
        </View>
      </View>

      {/* MODAL FOOTER BUTTON */}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          props.addType({
            id: Math.random().toString(36).substr(2),
            name: newName,
            categoryId,
            completed: false,
          });
          setCategoryId(props.categoryId)
          props.close()
        }}
        style={styles.submitButton}
      >
        <Text style={styles.submitText}>Done</Text>
      </TouchableOpacity>
    </Modal>
  )
}

createTask = ({ type, payload }) => ({
  type,
  payload: {
    id: payload.id,
    name: payload.name,
    categoryId: payload.categoryId,
    completed: payload.completed,
  }
})

createCategory = ({ type, payload }) => ({
  type,
  payload: {
    id: payload.id,
    name: payload.name,
  }
})

const mapStateToProps = (state, ownProps) => {
  const isTaskType = ownProps.type === 'task';
  let defaultCategoryIndex = 0;

  state.categories.find((category, index) => {
    if (category.id === ownProps.categoryId) {
      defaultCategoryIndex = index
      return category
    }
  })

  return {
    categories: state.categories,
    isTaskType,
    defaultCategoryIndex
  }
}

export default connect(
  mapStateToProps,
  (dispatch, ownProps) => {
    let actionType;
    let addType;

    if (ownProps.type === 'task') {
      actionType = 'ADD_TASK';
      addType = createTask;
    } else {
      actionType = 'ADD_CATEGORY';
      addType = createCategory
    }

    return ({
      addType: (data) => dispatch(addType({
        type: actionType,
        payload: data
      }))
    })
  }
)(AddModal)
