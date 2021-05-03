import React from "react";
import { Box, Card, CardContent } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

interface Props {
  readingList: any;
  setReadingList: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      marginBottom: theme.spacing(2),
    },
    controls: {
      // padding: "10px 10px",
      // margin: "5px",
    },
  })
);

const ListItem: React.FC<Props> = ({ readingList, setReadingList }) => {
  const classes = useStyles();

  const generateReadingList = () => {
    return readingList.map((item: any, index: number) => {
      return (
        <Card key={index} className={classes.root}>
          <CardContent className={classes.controls}>
            {item.title}
            {item.url}
          </CardContent>
        </Card>
      );
    });
  };

  return <Box>{generateReadingList()}</Box>;
};

export default ListItem;
