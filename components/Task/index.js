import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import ReturnButton from '../ReturnButton';
import container from './container';
import styles from './styles';

const Task = (props) => {
  const [selected, selectTask] = useState(false);
  const [modelOpen, setModalOpen] = useState(false);
  const [taskName, setTaskName] = useState(props.name)
  const [categoryId, setCategoryId] = useState(props.taskCategory.id);

  return (
    <View
      style={[
        styles.componentPaddingLeft,
        styles.componentPaddingRight,
        styles.container
      ]}
    >
      <TouchableOpacity
        onPress={() => selectTask(!selected)}
        style={styles.test}
      >
        {/* CHECKBOX */}
        <View style={styles.checkbox}>
          {selected && <MaterialIcons name='check' size={20} color='#303030' />}
        </View>
        {/* TASK NAME */}
        <Text style={[styles.taskName, props.completed && styles.taskCompleted]}>{props.name}</Text>
      </TouchableOpacity>
      {/* EDIT */}
      <TouchableOpacity onPress={() => setModalOpen(true)} style={styles.taskEdit}>
        <MaterialIcons name='edit' size={25} color='#b2bec3' />
      </TouchableOpacity>
      {/* COMPLETED */}
      {!selected && (
        <TouchableOpacity onPress={() => props.completeTask(!props.completed)}>
          <MaterialCommunityIcons
            name={props.completed ? 'check-circle' : 'checkbox-blank-circle-outline'}
            color={props.completed ? 'green' : '#b2bec3'}
            size={28}
          />
        </TouchableOpacity>
      )}
      {/* DELETE */}
      {selected && (
        <TouchableOpacity onPress={() => props.deleteTask()}>
          <MaterialIcons name='delete' size={28} color='#b2bec3' />
        </TouchableOpacity>
      )}

      <Modal
        transparent={true}
        visible={modelOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'flex-end',
          }}
        >
          <View
            style={{
              flex: 0.4,
              justifyContent: 'space-between',
              backgroundColor: '#FFF',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            {/* MODAL BODY */}
            <View
              style={{
                paddingVertical: 20,
                paddingHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {/* CLOSE/RETURN ICON */}
                <ReturnButton
                  onPress={() => setModalOpen(false)}
                  size={30}
                />
                {/* DELETE */}
                <TouchableOpacity onPress={() => props.deleteTask()}>
                  <MaterialIcons name='delete' size={28} color='#e84118' />
                </TouchableOpacity>
              </View>
              {/* UPDATE TASK INPUT */}
              <TextInput
                placeholder='Task name'
                placeholderTextColor='#303030'
                defaultValue={taskName}
                onChangeText={(name) => setTaskName(name)}
                onSubmitEditing={() => {
                  props.updateTask({
                    name: taskName,
                    categoryId
                  });
                  setModalOpen(false)
                }}
                style={styles.addTypeInput}
              />

              <Dropdown
                label='Select a category'
                data={props.categories}
                value={props.taskCategory.name}
                valueExtractor={({ id }) => id}
                labelExtractor={({ name }) => name}
                onChangeText={(id) => {
                  console.log({id})
                  setCategoryId(id)
                }}
              />
            </View>
            {/* MODAL FOOTER */}
            <View
              style={{
                flexDirection: 'row'
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setModalOpen(false)}
                style={{
                  flex: 0.5,
                  height: 60,
                  backgroundColor: '#FFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTopWidth: 1,
                  borderTopColor: '#b2bec3'
                }}
              >
                <Text style={{ color: '#000', textTransform: 'uppercase', fontWeight: 'bold' }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                props.updateTask({
                    name: taskName,
                    categoryId
                  });
                  setModalOpen(false)
                }}
                style={{
                  flex: 0.5,
                  height: 60,
                  backgroundColor: '#4cd137',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: '#FFF', textTransform: 'uppercase', fontWeight: 'bold' }}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default container(Task)
