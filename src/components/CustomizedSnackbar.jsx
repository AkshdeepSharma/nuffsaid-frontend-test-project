import React from "react";
import {
  Snackbar,
  SnackbarContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#F56236",
    color: "black",
  },
  messageContainer: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "15px",
  },
}));

const CustomizedSnackbar = ({ open, setSnackbarOpen, snackbarMessage }) => {
  const handleClose = () => {
    setSnackbarOpen(false);
  };
  const classes = useStyles();
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <SnackbarContent
          message={
            <div className={classes.messageContainer}>
              <IconButton
                size="small"
                aria-label="close"
                onClick={handleClose}
                className={classes.icon}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
              <Typography variant="body2">{snackbarMessage}</Typography>
            </div>
          }
          classes={{
            root: classes.root,
          }}
        />
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;
