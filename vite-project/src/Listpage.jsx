import React,{ useState } from 'react'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ProductList from './ProductList.jsx';
import data from "./Dummydata";
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
