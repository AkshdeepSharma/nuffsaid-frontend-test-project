import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import MessageCard from "./MessageCard";

const useStyles = makeStyles(() => ({
  column: {
    width: "25%",
    paddingTop: "50px",
    marginLeft: "5px",
    marginRight: "5px",
  },
}));

const MessageColumn = (props) => {
  const {
    columnTitle,
    allObjects,
    setAllObjects,
    messages = [],
    setSnackbarOpen,
    snackbarMessage,
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.column}>
      <Typography variant="h5">{columnTitle}</Typography>
      <Typography>Count {messages.length}</Typography>
      {messages.map((message, idx) => (
        <MessageCard
          setSnackbarOpen={setSnackbarOpen}
          snackbarMessage={snackbarMessage}
          key={idx}
          {...message}
          allObjects={allObjects}
          setAllObjects={setAllObjects}
        />
      ))}
    </div>
  );
};

export default MessageColumn;
