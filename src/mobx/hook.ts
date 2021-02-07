import {useContext} from 'react';
import {StoreContext} from './provider';
import {TodoList} from './TodoList';
export const useStore = (): TodoList => useContext(StoreContext);
