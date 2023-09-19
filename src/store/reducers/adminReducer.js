import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoadingGender: false,
  isLoadingPosition: false,
  isLoadingRole: false,
  genders: [],
  roles: [],
  positions: [],
  users: [],
  topDoctors: [],
  allDoctors: [],
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

      return {
        ...result,
      };
    case actionTypes.FETCH_POSITION_SUCCESS:
      state.positions = action.data;
      state.isLoadingPosition = false;

      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_FAILED:
      state.isLoadingPosition = false;
      state.positions = [];
      return {
        ...state,
      };
    // ROLE
    case actionTypes.FETCH_ROLE_START:
      let data = { ...state };
      copyState.isLoadingRole = true;

      return {
        ...data,
      };
    case actionTypes.FETCH_ROLE_SUCCESS:
      state.roles = action.data;

      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_FAILED:
      state.roles = [];
      return {
        ...state,
      };

    // CREATE USER
    case actionTypes.FETCH_ALL_USER_SUCCESS:
      state.users = action.users;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_USER_FAILED:
      state.users = [];
      return {
        ...state,
      };

    // TOP DOCTORS
    case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
      state.topDoctors = action.dataDoctors;
      return {
        ...state,
      };
    case actionTypes.FETCH_TOP_DOCTORS_FAILED:
      state.topDoctors = [];
      return {
        ...state,
      };

    // GET ALL DOCTORS
    case actionTypes.FETCH_ALL_DOCTORS_SUCCESS:
      state.allDoctors = action.dataDr;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_DOCTORS_FAILED:
      state.allDoctors = [];
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
