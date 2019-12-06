import { fromJS } from "immutable";
const defaultState = fromJS({
  eventList: [],
  flag: true
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case "change_list":
      return state.set("eventList", action.data);
    case "disable_Event_click":
      return state.set("flag", false);
    default:
      return state;
  }
};
