import React from 'react';
import { Avatar, Box, Card, CardContent } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import fetchThumbnailImage from 'src/services/fetchCardThumbnail';

interface Props {
  readingList: any;
  setReadingList: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'left',
      marginBottom: theme.spacing(2),
      padding: `${theme.spacing(1)}px 0 0 ${theme.spacing(1)}px`,
    },
    thumbnailArea: {
      margin: 'auto 0',
    },
  })
);

const ListItem: React.FC<Props> = ({ readingList, setReadingList }) => {
  const classes = useStyles();

  // バックエンドで情報を取得し、フロントにバックエンドサーバーの参照先を付与するのか？
  // fetchThumbnailImage('https://google.com');

  const generateReadingList = () => {
    return readingList.map((item: any) => {
      return (
        <Card key={item.id} className={classes.root}>
          <Box className={classes.thumbnailArea}>
            <Avatar variant='square' src={item.thumbnailURL} />
          </Box>
          <CardContent>{item.title}</CardContent>
        </Card>
      );
    });
  };

  return <Box>{generateReadingList()}</Box>;
};

export default ListItem;
