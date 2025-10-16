import axios from "axios";
export function getdetail(id) {
  return (axios.get("https://dummyjson.com/products/" + id).then(function(response) {return response.data })
  )
}
export function getProductList({ sortBy, search , order , page , setTotalPage }) {
  let limit = 39
  let params = { limit}
  
  if (sortBy ) {
    params.sortBy = sortBy
  }
  if (search) {
    params.q =  search
  }
  if (order) {
    params.order =  order
  }
   if (page) {
    params.skip =  (page - 1) * limit  
  }
  return (
   
      axios.get("https://dummyjson.com/products/search", {
        params
      })
      .then(function (response) {
        if (response.data.total !== 0 && response.data.limit !== 38) {
          setTotalPage(Math.ceil(response.data.total / response.data.limit));
        }
          return response.data
        })
)
}

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

// Signup function
export const signup = (username, password) => {
  console.log("Signup API called with:", { username, password });
  return API.post("/signup", { username, password });
};

// Login function
export const login = (username, password) => {
  console.log("Login API called with:", { username, password });
  return API.post("/login", { username, password });
};

