import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useToolBar = makeStyles({
  root: {
    justifyContent: "center",
  },
});

const NavBar = () => {
  const classes = useToolBar();
  return (
    <AppBar position="static">
      <Toolbar classes={{ root: classes.root }}>
        <Typography align="center" variant="h6">
          {document.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
