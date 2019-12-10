import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
  eventList: [],
  flag: true,
  character: {},
  package: []
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LIST:
      return state.set("eventList", action.data);
    case actionTypes.DISABLE_EVENT_CLICK:
      return state.set("flag", false);
    case actionTypes.INIT_CHARACTER:
      return state.merge({
        character: action.character,
        package: action.package
      });
    case actionTypes.ADD_EVENT:
      const newState = JSON.parse(JSON.stringify(state));
      newState.package.push(action.newEvent);
      return state.set("package", newState.package);
    default:
      return state;
  }
};
