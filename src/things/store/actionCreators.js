import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getStuff = stuffId => {
  return dispatch => {
    axios
      .get("./api/stuffList.json")
      .then(res => {
        const data = res.data.stuffList[stuffId];
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

export const calcualteMoney = newEvent => ({
  type: actionTypes.CALCULATE_MONEY,
  newEvent
});
