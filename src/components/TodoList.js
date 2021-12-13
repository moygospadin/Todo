import _ from 'lodash';
import React, {Component, useEffect} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import {todoFetch} from '../actions';
import ListItem from './ListItem';

function TodoList({todoFetch, todos}) {
  useEffect(() => {
    todoFetch();
  }, []);
  console.log('todos', todos);
  return (
    <>
      {todos.map(el => (
        <ListItem todo={el} key={el.uid} />
      ))}
    </>
  );
}

const mapStateToProps = state => {
  console.log('state.todoList', state.todoList);
  const todos = _.map(state.todoList, (val, uid) => {
    return {...val, uid};
  });

  return {todos};
};

export default connect(mapStateToProps, {todoFetch})(TodoList);
