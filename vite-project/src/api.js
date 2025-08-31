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
