import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
  character: {},
  money: "",
  package: [],
  stuffList: [],
  flag: true,
  date: 1,
  broke: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_CHARACTER:
      return state.merge({
        character: action.character,
        money: action.money,
        package: action.package
      });
    case actionTypes.CHANGE_LIST:
      return state.set("stuffList", action.data);
    case actionTypes.DISABLE_EVENT_CLICK:
      return state.set("flag", false);
    case actionTypes.ADD_STUFF:
      const newState = JSON.parse(JSON.stringify(state));
      newState.package.push(action.newStuff);
      return state.set("package", newState.package);
    case actionTypes.CALCULATE_MONEY:
      const newBalance = action.newEvent.balance
        ? state.get("money") + action.newEvent.money
        : state.get("money") - action.newEvent.money;
      return state.set("money", newBalance);
    case actionTypes.CHECK_MONEY:
      if (state.get("money") <= 0) {
        return state.set("broke", false);
      } else {
        return state.set("broke", true);
      }
    case actionTypes.RESTART:
      return state.merge({ broke: false }, { flag: true });
    default:
      return state;
  }
};
