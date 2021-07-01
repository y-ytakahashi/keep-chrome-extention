import React from 'react';
import FirebaseAuth from 'src/services/firebase';

const FirebaseContext = React.createContext({} as FirebaseAuth);

export default FirebaseContext;
