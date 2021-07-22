import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

const MessageCard = (props) => {
  const {
    message,
    priority,
    allObjects,
    setAllObjects,
    setSnackbarOpen,
    snackbarMessage,
  } = props;
  const classes = useStyles();
  const priorityColorMap = {
    1: "#F56236",
    2: "#FCE788",
    3: "#88FCA3",
  };
  return (
    <Card
      className={classes.card}
      style={{
        backgroundColor: `${priorityColorMap[priority]}`,
      }}
    >
      <CardContent>
        <Typography>{message}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            setAllObjects(
              allObjects.filter((object) => object.message !== message)
            );
            if (priority === 1 && message === snackbarMessage) {
              setSnackbarOpen(false);
            }
          }}
        >
          Clear
        </Button>
      </CardActions>
    </Card>
  );
};

export default MessageCard;
