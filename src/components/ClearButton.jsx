import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  button: {
    minWidth: "100px",
    backgroundColor: "#00E2C4",
    marginLeft: "10px",
    "&:hover": {
      backgroundColor: "#00E2C4",
    },
  },
}));

const ClearButton = (props) => {
  const { setAllObjects } = props;
  const classes = useStyles();
  const handleOnClick = () => {
    setAllObjects([]);
  };
  return (
    <Button
      variant="contained"
      className={classes.button}
      onClick={handleOnClick}
    >
      Clear
    </Button>
  );
};

export default ClearButton;
