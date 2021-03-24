import { Button, CircularProgress, Grid, TextField } from "@material-ui/core";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

import { BASE, URLValidator } from "../assets";
import UrlError from "./Error.component";
import IconCut from "./IconCut.component";

const Shorten = () => {
  const [fullUrl, setFullUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        const res = await axios.put(`${BASE}/shorten`, { url: fullUrl });
        if (!res.data.success) throw new Error(res.data.error);
      } catch (err) {
        console.log("Error", err.message);
      }
      setFullUrl("");
      setLoading(false);
    },
    [fullUrl]
  );

  useEffect(() => {
    if (fullUrl) setIsValid(URLValidator(fullUrl));
    else setIsValid(true);
  }, [fullUrl]);
  return (
    <form>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="stretch"
        alignContent="stretch"
      >
        <Grid item xs={10}>
          <TextField
            error={!isValid}
            fullWidth
            value={fullUrl}
            onChange={(e) => setFullUrl(e.target.value)}
            label="Full URL"
            color="secondary"
            variant="filled"
            type="url"
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            size="large"
            style={{ height: "100%" }}
            fullWidth
            disabled={!Boolean(fullUrl) || loading || !isValid}
            color="secondary"
            variant="contained"
            type="submit"
            onClick={handleSubmit}
          >
            {loading ? (
              <CircularProgress size={30} thickness={4} color="primary" />
            ) : (
              <IconCut size={40} color="#fff" />
            )}
          </Button>
        </Grid>
        {!isValid && <UrlError>The URL is not legit</UrlError>}
      </Grid>
    </form>
  );
};

export default Shorten;
