import { ADD_TO_CART, REMOVE_TO_CART } from "./constants";

const initialstate={
    cardData:["test"]
}

export default function cardItems(state = initialstate,action){
    switch(action.type){
        case REMOVE_TO_CART:
            return{
                ...StaticRange,
                cardData:action.data
            }
            break;

        case ADD_TO_CART:
            return{
                    ...StaticRange,
                    cardData:action.data
            }
            break;

        default:
            return state
    }
}