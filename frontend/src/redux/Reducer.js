import { ADD_TO_CART, EDIT_DATA, IS_EXPENCE_POPUP } from "./constants";

const initialstate = {
  cardData: ["test"],
  isExpencePopup: false,
  editData: "",
};

export default function allStates(state = initialstate, action) {
  switch (action.type) {
    case IS_EXPENCE_POPUP:
      return {
        ...state,
        isExpencePopup: action.data,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cardData: action.data,
      };
    case EDIT_DATA:
      return {
        ...state,
        editData: action.data,
      };

    default:
      return state;
  }
}
