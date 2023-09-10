import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoadingGender: false,
  isLoadingPosition: false,
  isLoadingRole: false,
  genders: [],
  roles: [],
  positions: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    // GENDER
    case actionTypes.FETCH_GENDER_START:
      let copyState = { ...state };
      copyState.isLoadingGender = true;
      //  console.log("Long bùi fire fetch gender start :", action);
      return {
        ...copyState,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      state.genders = action.data;
      state.isLoadingGender = false;
      // console.log("Long bùi fire fetch gender success :", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAILED:
      // console.log("Long bùi fire fetch gender failed :", action);

      state.isLoadingGender = false;
      state.genders = [];
      return {
        ...state,
      };
    // POSITION
    case actionTypes.FETCH_POSITION_START:
      let result = { ...state };
      copyState.isLoadingPosition = true;
      //  console.log("Long bùi fire fetch position start :", action);
      return {
        ...result,
      };
    case actionTypes.FETCH_POSITION_SUCCESS:
      state.positions = action.data;
      state.isLoadingPosition = false;
      // console.log("Long bùi fire fetch position success :", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_FAILED:
      // console.log("Long bùi fire fetch position failed :", action);

      state.isLoadingPosition = false;
      state.positions = [];
      return {
        ...state,
      };
    // ROLE
    case actionTypes.FETCH_ROLE_START:
      let data = { ...state };
      copyState.isLoadingRole = true;
      //  console.log("Long bùi fire fetch role start :", action);
      return {
        ...data,
      };
    case actionTypes.FETCH_ROLE_SUCCESS:
      state.roles = action.data;
      state.isLoadingRole = false;
      // console.log("Long bùi fire fetch role success :", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_FAILED:
      // console.log("Long bùi fire fetch role failed :", action);

      state.isLoadingRole = false;
      state.roles = [];
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
