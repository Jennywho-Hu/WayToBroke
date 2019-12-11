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
