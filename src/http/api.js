import axios from 'axios';
import api from './axios';

// Auth
export const login = (payload) => api.post("/Login", payload);
export const logOut = (payload) => api.post("/LogOut", payload);

//Screens
export const getScreen = async (payload) => {
  const response = await api.post("/GETLookupData",
    payload,
  );
  return await response.data;
};

// Screen permissions
export const getUserGroupScreens = async (payload) => {
  const res = await api.post("/GetScreenGroup", payload);
  return res.data;
};



export const getUserGroup = async (payload) => {
  const response = await api.post("/GetUserGroup", payload);
  return response.data;
};

export const updateUserGroupScreens = async (payload) => {
  const response = await api.post("/UpdateUserGroup", payload);
  console.log("Response from updateUserGroupScreens:", response.data);
  return response.data;
};

// Add User Group
export const createUserGroupScreens = async (payload) => {
  const response = await api.post("/AddUserGroup", payload);
  return response.data;
};

//Delete User Group
export const deleteUserGroup = async (payload) => {
  console.log("Payload for deleteUserGroup:", payload);
  const response = await api.post("/DeleteUserGroup", payload);
  console.log("Response from deleteUserGroup:", response.data);
  return response.data;

};

// Company API
export const getCompanyById = (payload) => api.post("/GetCompany", payload);
export const addCompany = (payload) => api.post("/AddCompany", payload);
export const updateCompany = (payload) => api.post("/UpdateCompany", payload);
export const deleteCompany = (payload) => api.post("/DeleteCompany", payload);

// Plans API
export const plansById = (payload) => api.post("/GetPlans", payload);
export const addPlans = (payload) => api.post("/AddPlans", payload);
export const updatePlans = (payload) => api.post("/UpdatePlans", payload);
export const deletePlans = (payload) => api.post("/DeletePlans", payload);

// User Education
export const userEducationById = (payload) => api.post("/GetUserEducation", payload);
export const addUserEducation = (payload) => api.post("/AddUserEducation", payload);
export const updateUserEducation = (payload) => api.post("/UpdateUserEduction", payload);
export const deleteUserEducation = (payload) => api.post("/DeleteUserEduction", payload);

//Role and access
export const getRoleById = (payload) => api.post("/GetUserGroup", payload);
export const createRole = (payload) => api.post("/AddUserGroup", payload);
export const updateRole = (payload) => api.post("/UpdateUserGroup", payload);

// // EmailConfiguration
// export const getEmailConfigurationById = (payload) => api.post("/GetEmailConfiguration", payload);
// export const addEmailConfiguration = (payload) => api.post("/AddEmailConfiguration", payload);
// export const updateEmailConfiguration = (payload) => api.post("/UpdateEmailConfiguration", payload);
// export const deleteEmailConfiguration = (payload) => api.post("/DeleteEmailConfiguration", payload);

// // EmailDraftContent
// export const getEmailDraftContentById = (payload) =>
//   api.post("/GetEmailDraftContent", payload);
// export const addEmailDraftContent = (payload) =>
//   api.post("/AddEmailDraftContent", payload);
// export const updateEmailDraftContent = (payload) =>
//   api.post("/UpdateEmailDraftContent", payload);
// export const deleteEmailDraftContent = (payload) =>
//   api.post("/DeleteEmailDraftContent", payload);
