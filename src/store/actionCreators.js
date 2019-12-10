import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getCharactor = () => {
  return dispatch => {
    axios
      .get("./api/Character.json")
      .then(res => {
        const data = res.data;

        const action = {
          type: actionTypes.INIT_CHARACTER,
          character: data.character,
          package: data.package
        };
        dispatch(action);
      })
      .catch(err => console.log(err));
  };
};

export const getEvent = productId => {
  return dispatch => {
    axios
      .get("./api/EventList.json")
      .then(res => {
        const data = res.data.productList[productId];
        const action = {
          type: actionTypes.CHANGE_LIST,
          data: data
        };
        dispatch(action);
      })
      .catch(err => console.log(err));
  };
};

export const disableEventclick = () => ({
  type: actionTypes.DISABLE_EVENT_CLICK
});

export const addNewEvent = newEvent => ({
  type: actionTypes.ADD_EVENT,
  newEvent
});
