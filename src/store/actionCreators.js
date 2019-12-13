import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getCharactor = () => {
  return dispatch => {
    axios
      .get("./api/character.json")
      .then(res => {
        const data = res.data;
        const action = {
          type: actionTypes.INIT_CHARACTER,
          character: data.character,
          money: data.money,
          package: data.package
        };
        dispatch(action);
      })
      .catch(err => console.log(err));
  };
};

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

export const addNewStuff = newStuff => ({
  type: actionTypes.ADD_STUFF,
  newStuff
});

export const calcualteMoney = newEvent => ({
  type: actionTypes.CALCULATE_MONEY,
  newEvent
});

export const checkMoney = () => ({
  type: actionTypes.CHECK_MONEY
});

export const restartGameData = () => ({
  type: actionTypes.RESTART
});
