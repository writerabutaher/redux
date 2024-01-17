const { STATUSCHANGED, COLORCHANGED } = require("./actionType");

const initialState = {
  status: "All",
  color: [],
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case COLORCHANGED:
      const { color, changeType } = action.payload;

      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "removed":
          return {
            ...state,
            colors: state.colors.filter((existColor) => existColor !== color),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};
