import React, { useState, useEffect } from "react";
import { Typography, Divider, makeStyles } from "@material-ui/core";
import MessageList from "./message-list";
import MessageColumn from "./MessageColumn";
import ClearButton from "./ClearButton";
import CustomizedSnackbar from "./CustomizedSnackbar";

const useStyles = makeStyles(() => ({
  title: { marginLeft: "60px" },
  divider: { marginTop: "5px", marginBottom: "5px" },
  buttons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  columns: {
    display: "flex",
    width: "100%",
    placeContent: "center",
  },
}));

const App = () => {
  const [allObjects, setAllObjects] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const latestMessage = allObjects[allObjects.length - 1] || {};
    if (latestMessage.priority === 1) {
      setSnackbarOpen(false);
      setSnackbarOpen(true);
      setSnackbarMessage(latestMessage.message);
    }
  }, [allObjects]);

  const errors = allObjects
    .filter((message) => message.priority === 1)
    .reverse();
  const warnings = allObjects
    .filter((message) => message.priority === 2)
    .reverse();
  const info = allObjects.filter((message) => message.priority === 3).reverse();

  const columns = [
    {
      title: "Error Type 1",
      messages: errors,
    },
    {
      title: "Warning Type 2",
      messages: warnings,
    },
    {
      title: "Info Type 3",
      messages: info,
    },
  ];
  return (
    <div>
      <CustomizedSnackbar
        open={snackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
        snackbarMessage={snackbarMessage}
      />
      <Typography variant="h5" className={classes.title}>
        Help.com Coding Challenge
      </Typography>
      <Divider className={classes.divider} />
      <div className={classes.buttons}>
        <MessageList allObjects={allObjects} setAllObjects={setAllObjects} />
        <ClearButton setAllObjects={setAllObjects} />
      </div>
      <div className={classes.columns}>
        {columns.map((column) => (
          <MessageColumn
            setSnackbarOpen={setSnackbarOpen}
            snackbarMessage={snackbarMessage}
            key={column.title}
            columnTitle={column.title}
            messages={column.messages}
            allObjects={allObjects}
            setAllObjects={setAllObjects}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
