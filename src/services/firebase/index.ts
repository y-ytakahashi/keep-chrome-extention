import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/database';
// react の context provider を定義
import FirebaseContext from 'src/services/firebase/firebaseContext';

class FirebaseAuth {
  public readonly firebase: firebase.app.App;

  private auth: any;

  private googleProvider: firebase.auth.GoogleAuthProvider;

  private static firebaseAuthInstance: FirebaseAuth;

  private constructor() {
    this.firebase = firebase.initializeApp({
      apiKey: process.env.REACT_APP_FIREBASE_WEB_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
      projectId: process.env.REACT_APP_FIREBASE_DATABASE_URL,
      messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
    });

    this.googleProvider = new firebase.auth.GoogleAuthProvider();
  }

  static getInstance() {
    if (this.firebaseAuthInstance) {
      return this.firebaseAuthInstance;
    }
    this.firebaseAuthInstance = new FirebaseAuth();
    return this.firebaseAuthInstance;
  }

  get authProvider() {
    return this.googleProvider;
  }

  public connect(token: string) {
    return this.firebase.auth().signInWithCustomToken(token);
  }

  public disconnect() {
    return this.firebase.auth().signOut();
  }

  // eslint-disable-next-line class-methods-use-this
  public async googleAuth() {
    await this.getCurrentAuth();
    console.log('this.auth', this.auth.users);
    if (!this.auth.users) {
      await firebase.auth().signInWithRedirect(this.googleProvider);
    }
  }

  public async getCurrentAuth() {
    await firebase
      .auth()
      .getRedirectResult()
      .then((result) => {
        console.log('auth', result);
        this.auth = result;
      });
  }
}

export default FirebaseAuth;
export { FirebaseContext };
