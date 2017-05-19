import { combineReducers } from 'redux';
import editor from './editor';
import items from './items';

const rootReducer = combineReducers({
  editor,
  items,
});

export default rootReducer;
