import Icon from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Modal, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default CategoryModal = (props) => {
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
          <Text style={styles.modalTitle}>Add Category</Text>

          {/* ADD TASK INPUT */}
          <TextInput
            placeholder='Type your task'
            placeholderTextColor='#303030'
            style={styles.addTaskInput}
          />
        </View>
      </View>

      {/* MODAL FOOTER BUTTON */}
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.submitButton}
      >
        <Text style={styles.submitText}>Done</Text>
      </TouchableOpacity>
    </Modal>
  )
}
