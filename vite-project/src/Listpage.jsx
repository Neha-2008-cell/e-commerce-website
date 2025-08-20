import React,{ useState } from 'react'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ProductList from './ProductList.jsx';
 const data=[
    { 
       imgUrl:"https://www.pngkey.com/png/detail/390-3909490_white-coffee-mug-png-flat-white-mugs.png", 
       category:'Mugs', 
       title:"White Printed Coffee Mug", 
       price:"15.00"
      },
      {
        imgUrl:"https://png.pngtree.com/png-vector/20220527/ourlarge/pngtree-unisex-colored-t-shirt-mock-up-png-image_4757841.png", 
       category:'Tshirts', 
       title:"Red Printed Tshirt", 
       price:"34.00"
      },
      {
        imgUrl:"https://www.pikpng.com/pngl/m/113-1135831_white-mug-png-transparent-white-mug-png-clipart.png", 
       category:'Mugs', 
       title:"Father's Day Coffee Mug", 
       price:"19.00"
      },
      {
        imgUrl:"https://www.pngkey.com/png/detail/390-3909490_white-coffee-mug-png-flat-white-mugs.png", 
       category:'Mugs', 
       title:"Personalised Mug", 
       price:"15.00"
      },
      {
        imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ip6OjjN8IMSt-CWgTGPgK5ro6XefOMn9Qw&s", 
       category:'Tshirts', 
       title:"Typography Teal Printed Tshirt", 
       price:"32.00"
      },
      {
        imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLQiIA1zYyxg4OhXw8LkyI0JUIRbZpMR_DEtHBG3LwxfJK18cwVyKVfDmiB_Qi1YBJ0U&usqp=CAU", 
       category:'Tshirts', 
       title:"Printed Dark Blue Tshirt", 
       price:"34.00"
      },
       {
        imgUrl:"https://png.pngtree.com/png-vector/20220527/ourlarge/pngtree-unisex-colored-t-shirt-mock-up-png-image_4757841.png", 
       category:'Tshirts', 
       title:"Printed Tshirt Coffee Black Color", 
       price:"25.00"
      },
      {
        imgUrl:"https://png.pngtree.com/png-clipart/20220909/original/pngtree-color-t-shirt-mockups-design-colorful-png-image_8505038.png", 
       category:'Tshirts', 
       title:"Printed Green Tshirt", 
       price:"28.00"
      },
      {
        imgUrl:"https://images.openai.com/thumbnails/url/KSwbZnicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4M9SjXLbAoCssq8bAITzL1DqkstUzMsQyx0K1ICiq2KM0yjip0dazIi0hOCfauMizPzvR0KrdwSXUNL1crBgAeqiot", 
       category:'Tshirts', 
       title:"Printed Brown Tshirt", 
       price:"25.00"
      },
    ]
function Listpage() {
 
 let [query , update]=useState("")
  let [Data,setdata]=useState(data)
let [sort,setsort]=useState("default")
 
  function handlelist(event){

    let newquery = event.target.value
    update(newquery);

   let newdata = data.filter(function({title}){
    return (
       title.toLowerCase().indexOf(newquery.toLowerCase()) != -1
       //title. isliye likha ki kisse indexof check karne h or indexof ke bracket me vo likha jo check karna h ki indexof me h kya.
    )
   })
    setdata(newdata)
  }

  function handlesort(event){
    let sortData=[...Data]
    let newsort = event.target.value
    setsort(newsort)
    if(newsort==="title"){
      sortData.sort(function(x,y){
        return x.title > y.title ? 1:-1
      })
     }
   else if(newsort==="low"){
     sortData.sort(function(x,y){
       return x.price - y.price 
     })
   }
   else if(newsort==="high"){
   sortData.sort(function(x,y){
       return y.price - x.price 
     })
   }
   else{
    sortData=[...data]
   }
   setdata(sortData)
  }
  return (
<div >
   <Navbar/>
    <div className='bg-white  flex  justify-between'>
               <input className='bg-gray-100 m-10 border border-solid border-gray rounded p-1' value={query} placeholder='Search' onInput={handlelist}/>
               <select value={sort} onChange={handlesort} className='bg-gray-100 m-10 border border-solid border-gray rounded p-1'>
                   <option value="default">Default Sort</option>
                   <option value="title">Sort by title</option>
                   <option value="low">Sort by price: low to high</option>
                   <option value="high">Sort by price: high to low</option>
               </select>
           </div>
   <ProductList products={Data}/>
   <Footer/>
</div>
  )

}

export default Listpage
