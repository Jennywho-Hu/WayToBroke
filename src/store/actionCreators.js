import axios from "axios";

export const getEvent = productId => {
  return dispatch => {
    axios
      .get("./api/EventList.json")
      .then(res => {
        const data = res.data.productList[productId];
        const action = {
          type: "change_list",
          data: data
        };
        dispatch(action);
      })
      .catch(err => console.log(err));
  };
};

export const disableEventclick = () => ({
  type: "disable_Event_click"
});
