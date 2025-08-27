import axios from "axios";
export function getdetail(id) {
  return(  axios.get("https://dummyjson.com/products/" + id) )
}
export function getProductList() {
    return (
        axios.get("https://dummyjson.com/products")
)
}