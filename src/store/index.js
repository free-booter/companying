import { configureStore } from '@reduxjs/toolkit';
import homeReduce from './modules/home';
import informationReduce from './modules/information';
import userReduce from './modules/user';

export default configureStore({
  reducer: {
    home: homeReduce,
    information: informationReduce,
    user: userReduce
  }
})
