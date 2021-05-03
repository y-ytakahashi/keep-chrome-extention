import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Card } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import ListItem from "components/molecules/listItem";
import { IFListItem } from "interfaces/readingList/index";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      background: "gray",
      padding: "8px",
      margin: "8px",
    },
  })
);
const ListView = () => {
  const [list, setList] = useState<Array<any>>([]);

  const addList = () => {
    const chromeURL = {
      url: "https://google.com",
      title: "google",
      memo: "home",
    };

    list.push(chromeURL);
    const copyList = Object.create(list);
    setList(copyList);
  };

  const classes = useStyles();
  // const theme = useTheme();

  if (!list) {
    return <></>;
  }
  return (
    <Box>
      <Paper className={classes.root}>
        <Button onClick={addList}>リーディングリストを追加</Button>
        <ListItem setReadingList={setList} readingList={list} />
      </Paper>
    </Box>
  );
};

export default ListView;
