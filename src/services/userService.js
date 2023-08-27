import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, passWord: userPassword });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

const createNewUserService = (data) => {
  console.log("this is API data :", data);
  return axios.post("/api/create-new-user", data);
};

const deleteUserService = (userId) => {
  console.log("this is API SERVICE userID : ", userId);
  //return axios.delete("/api/delete-user", { id: userId });
  return axios.delete("/api/delete-user", {
    // headers: {
    //   Authorization: authorizationToken
    // },
    data: {
      id: userId,
    },
  });
};
export { handleLoginApi, getAllUsers, createNewUserService, deleteUserService };
