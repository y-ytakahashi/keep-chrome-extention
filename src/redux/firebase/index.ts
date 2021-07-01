import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';
import FirebaseAuth from '../../services/firebase';

const firebaseClient = FirebaseAuth.getInstance();
const { authProvider } = firebaseClient;
const name = 'firebaseAuth';

export const firebaseCurrentAuth = createAsyncThunk(
  'firebaseCurrentAuth',
  async (param: any, thunkAPI: any) => {
    console.log('firebaseClient.firebase.auth');
    const result = await firebaseClient.firebase.auth().getRedirectResult();
    if (!result.user) {
      await firebaseClient.firebase.auth().signInWithRedirect(authProvider);
    }

    return result;
  }
);

const initialState: { data: { [key: string]: any } } = {
  data: {},
};

type State = typeof initialState;

/**
 * ユーザープロファイルのストアを定義
 */
const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      firebaseCurrentAuth.fulfilled,
      (state: State, action: PayloadAction<any>) => {
        console.log('currentAuth', action.payload);
        state.data = action.payload;
      }
    );
  },
});

export default slice.reducer;

export const selectorCurrentAuth = (state: any) =>
  state.reduxReducers.firebaseAuth.data;
