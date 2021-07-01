import React from 'react';
import { Avatar, Box, Card, CardContent, Typography } from '@material-ui/core';
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
      maxHeight: theme.spacing(12),

      '&:hover': {
        background: theme.palette.action.hover,
      },
    },
    thumbnailArea: {
      margin: 'auto 0',
    },
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
    pos: {
      marginBottom: 0,
      marginRight: theme.spacing(1),
    },
    caption: {
      marginTop: theme.spacing(1),
      display: 'flex',
      justifyContent: 'left',
    },
    description: {
      whiteSpace: 'normal',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  })
);

const ListItem: React.FC<Props> = ({ readingList, setReadingList }) => {
  const classes = useStyles();

  // バックエンドで情報を取得し、フロントにバックエンドサーバーの参照先を付与するのか？
  // fetchThumbnailImage('https://google.com');
  console.log(readingList);
  const generateReadingList = () => {
    return readingList.map((item: any) => {
      return (
        <Card key={item.ID} className={classes.root}>
          <Box className={classes.thumbnailArea}>
            <Avatar
              variant='square'
              src={item.thumbnail}
              className={classes.large}
            />
          </Box>
          <CardContent>
            <Typography variant='subtitle1'>{item.title}</Typography>
            <Typography
              style={{ whiteSpace: 'pre-line' }}
              variant='caption'
              component='p'>
              {item.description}
            </Typography>
            <Box className={classes.caption}>
              <Typography className={classes.pos} color='textSecondary'>
                {item.domainName}
              </Typography>
              <Typography className={classes.pos} color='textSecondary'>
                {item.modifiedDate}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      );
    });
  };

  return <Box>{generateReadingList()}</Box>;
};

export default ListItem;
