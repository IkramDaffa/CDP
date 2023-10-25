import axios from "axios";

export const API = {
  get: async function (endpoint) {
    let headers = {};
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/" + endpoint,
        {
          headers: headers,
        }
      );
      return response;
    } catch (error) {
      throw error.response;
    }
  },
};
