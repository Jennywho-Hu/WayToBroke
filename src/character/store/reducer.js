import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
  character: {},
  money: "",
  package: []
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_CHARACTER:
      return state.merge({
        character: action.character,
        money: action.money,
        package: action.package
      });
    default:
      return state;
  }
};
