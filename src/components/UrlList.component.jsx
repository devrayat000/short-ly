import { Grid, Link, ListItemText } from "@material-ui/core";

const UrlList = ({
  children,
  href,
  secondary,
  primary,
  color = "primary",
  ...rest
}) => {
  return (
    <Grid item xs={6}>
      <ListItemText {...rest} secondary={secondary} primary={primary}>
        <Link
          rel="nofollow"
          gutterBottom
          underline="hover"
          variant="h6"
          color={color}
          href={href}
          target="_blank"
        >
          {children}
        </Link>
      </ListItemText>
    </Grid>
  );
};

export default UrlList;
