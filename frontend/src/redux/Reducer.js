import { ADD_TO_CART, EDIT_DATA, IS_EXPENCE_POPUP, MONTH_TO_SHOW } from "./constants";
const newdate = new Date();
const month = newdate.getMonth() + 1;

const initialstate = {
  cardData: ["test"],
  isExpencePopup: false,
  editData: "",
  monthToShow:month
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
      case MONTH_TO_SHOW:
        return {
          ...state,
          monthToShow: action.data,
        };

    default:
      return state;
  }
}
