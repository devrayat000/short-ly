import {
  Divider,
  Grid,
  List,
  ListItem,
} from "@material-ui/core";
import { Fragment, useEffect, useReducer } from "react";
import ScrollBar from "simplebar-react";
import { io } from "socket.io-client";

import "simplebar/src/simplebar.css";

import UrlList from "./UrlList.component";
import { BASE } from "../assets";

const socket = io(BASE);
const reducer = (state, action) => {
  switch (action.type) {
    case "connect":
      return action.payload.data;

    case "insert":
      return [...state, action.payload.fullDocument];

    case "update":
      const id = action.payload.documentKey._id;
      const updated = action.payload.updateDescription.updatedFields;
      const newState = state.map((prev) => {
        if (prev._id !== id) return prev;
        return { ...prev, ...updated };
      });
      return newState;

    default:
      return state;
  }
};
const LinkList = () => {
  const [lists, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const subscription = socket.on("change", (data) => {
      dispatch({ type: data.operationType, payload: data });
    });
    return subscription.close;
  }, []);
  return (
    <List component="nav" aria-label="mailbox folders">
      <ScrollBar style={{ maxHeight: 400 }}>
        {lists.map((list, idx) => {
          let short = `${BASE}/${list.shortUrl}`;
          return (
            <Fragment key={list._id}>
              <ListItem button>
                <Grid container direction="row">
                  <UrlList
                    href={list.fullUrl}
                    secondary={`created: ${list.created}`}
                  >
                    {list.fullUrl}
                  </UrlList>
                  <UrlList
                    href={short}
                    secondary={`clicked ${list.clicks} time(s)`}
                    color="secondary"
                  >
                    {short}
                  </UrlList>
                </Grid>
              </ListItem>
              {lists.length !== idx + 1 && <Divider light />}
            </Fragment>
          );
        })}
      </ScrollBar>
    </List>
  );
};

export default LinkList;
