import { combineReducers } from "redux-immutable";
import { reducer as characterReducer } from "../character/store";
import { reducer as thingsRedcuer } from "../things/store";

const reducer = combineReducers({
  character: characterReducer,
  things: thingsRedcuer
});

export default reducer;
