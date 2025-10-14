import axios from "axios";
export function getdetail(id) {
  return (axios.get("https://dummyjson.com/products/" + id).then(function(response) {return response.data })
  )
}
export function getProductList() {
    return (
      axios.get("https://dummyjson.com/products").then(function (response) {
          return response.data.products
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
  return API.post("/login", { username, password });
};

