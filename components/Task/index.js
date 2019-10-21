import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

const Task = (props) => {
  const [selected, selectTask] = useState(false);

  return (
    <View
      // onPress={() => props.completeTask(!props.completed)}
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
      {/* COMPLETED */}
      {!selected && (
        <TouchableOpacity onPress={() => props.completeTask(!props.completed)}>
          <MaterialCommunityIcons
            name={props.completed ? 'check-circle' : 'checkbox-blank-circle-outline'}
            color={props.completed ? 'green' : '#b2bec3'}
            size={26}
          />
        </TouchableOpacity>
      )}
      {/* DELETE */}
      {selected && (
        <TouchableOpacity onPress={() => console.log('delete')}>
          <MaterialIcons name='delete' size={20} color='#b2bec3' />
        </TouchableOpacity>
      )}
    </View>
  );
}

const completeTask = (id, completed) => ({
  type: 'COMPLETE_TASK',
  payload: {
    id,
    completed
  }
})

export default connect(
  null,
  (dispatch, ownProps) => {
    return {
      completeTask: (completed) => dispatch(completeTask(ownProps.id, completed))
    }
  }
)(Task)
