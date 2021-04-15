import React, { FC, ReactNode } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface props {
  children: ReactNode;
}

const UseStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "right",
    gridColumnGap: "40px",
    height: "100vh",
    width: "400px",
    // 暫定実装
    backgroundColor: "gray",
    position: "absolute",
    verticalAlign: "right",
  },
});
const index: FC<props> = ({ children }) => {
  const classes = UseStyles();
  return <Box boxShadow={5} className={classes.root}>aaa{children}</Box>;
};

export default index;
