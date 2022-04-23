import axios from "axios";

const usersUrl = "http://localhost:8008";

// it will get the data from server
export const getData = async (data) => {
  console.log("inside getData serverside", data);
  
  return await axios.get(`${usersUrl}/getData`);
};

