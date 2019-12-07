import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
  eventList: [],
  flag: true
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LIST:
      return state.set("eventList", action.data);
    case actionTypes.DISABLE_EVENT_CLICK:
      return state.set("flag", false);
    default:
      return state;
  }
};
