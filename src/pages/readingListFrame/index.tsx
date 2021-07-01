import React, { FC, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import ListView from 'src/components/organisms/listView';
import FirebaseContext from 'src/services/firebase/firebaseContext';
// google
import { firebaseCurrentAuth } from 'src/redux/firebase';

// selector
import selectorCurrentAuth from 'src/redux/selector';

const ReadingListPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(firebaseCurrentAuth({}));
  }, []);
  return (
    <Box>
      <ListView />
    </Box>
  );
};

export default ReadingListPage;
