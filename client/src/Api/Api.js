import axios from "axios";

// const usersUrl = "https://myappbrewapp.herokuapp.com/";
// const usersUrl = "http://localhost:8008";
// 


const usersUrl =(process.env.NODE_ENV === 'production' )? 'https://myappbrewapp.herokuapp.com' :"http://localhost:8008";

// it will get the data from server
export const getData = async (data) => {
  console.log("inside getData serverside");
  
  return await axios.get(`${usersUrl}/getData`);
};

