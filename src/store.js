import { createStore } from 'redux';
import reducer from './ducks/todos';

export default createStore( reducer );