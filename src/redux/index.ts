import { combineReducers } from 'redux';
// import { firebaseGoogleAuth, firebaseCurrentAuth } from 'src/redux/firebase';
import firebaseAuth from 'src/redux/firebase';

const Reducers = combineReducers({
  firebaseAuth,
});

export default Reducers;
