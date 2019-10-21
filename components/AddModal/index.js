import React, { useState } from 'react';
import { Modal, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import ReturnButton from '../ReturnButton';
import container from './container';
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
        <ReturnButton
          onPress={props.close}
          size={40}
          style={styles.closeModalIconContainer}
        />

        <View style={[styles.componentPaddingLeft, styles.componentPaddingRight]}>
          {/* TITLE */}
          <Text style={styles.modalTitle}>Add {props.type}</Text>

          {/* ADD TASK/CATEGORY INPUT */}
          <TextInput
            placeholder={`Type your ${props.type}`}
            placeholderTextColor='#303030'
            onChangeText={(name) => setName(name)}
            onSubmitEditing={() => {
              props.addType({
                name: newName,
                categoryId,
                completed: false,
              });
              setCategoryId(props.categoryId)
              props.close()
            }}
            style={styles.addTypeInput}
          />

          {/* ONLY FOR TASK TYPE */}
          {props.isTaskType && (
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
          )}
        </View>
      </View>

      {/* MODAL FOOTER BUTTON */}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          props.addType({
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

export default container(AddModal)
