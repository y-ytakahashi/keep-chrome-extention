import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Paper, Toolbar, RootRef } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import ListItem from 'src/components/molecules/listItem';
import { IFListItem } from 'src/interfaces/readingList/index';
import SearchBox from 'src/components/molecules/searchBox';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      background: theme.palette.common.white,
      padding: '8px',
      margin: '8px',
    },
    toolBarStyle: {
      // background: 'red',
      '& .MuiToolbar-regular': {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        width: '100%',
      },
    },
  })
);
const ListView: React.VFC = () => {
  const domRef = useRef();

  useEffect(() => {
    console.log(domRef.current);
  });

  const [list, setList] = useState<Array<any>>([]);

  const addList = () => {
    const chromeURL = {
      thumbnailURL:
        'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
      url: 'https://qiita.com',
      title: 'google',
      memo: 'home',
    };

    list.push(chromeURL);
    const copyList = Object.create(list);
    setList(copyList);
  };

  const classes = useStyles();
  // const theme = useTheme();

  // 文字検索については、Storeから取得したデータに対して filter 関数を適用させることで実現する

  if (!list) {
    return <></>;
  }
  return (
    <Box>
      <Paper className={classes.root}>
        <Box className={classes.toolBarStyle}>
          <Toolbar>
            <SearchBox />
            <Button color='primary' variant='contained' onClick={addList}>
              Save
            </Button>
          </Toolbar>
        </Box>
        <RootRef rootRef={domRef}>
          <ListItem setReadingList={setList} readingList={list} />
        </RootRef>
      </Paper>
    </Box>
  );
};

export default ListView;
