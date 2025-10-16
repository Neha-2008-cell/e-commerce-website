import { useEffect, useState } from 'react';
import Input from './Input.jsx';
import ProductList from './ProductList.jsx';
import Notmatch from './Notmatch.jsx';
import { getProductList } from './api.js';
import Loading from './Loading.jsx';
import { range } from 'lodash';
import {Link , useSearchParams } from 'react-router-dom';
function Listpage() {
  let [loading, setloading] = useState(true)
  const [ totalPage, setTotalPage ] = useState(1);
  let [Data, setdata] = useState([])
  
  let [searchParams, setSearchParams] = useSearchParams() 
  
  let params = Object.fromEntries([...searchParams])
  let { page, search, sort } = params
  page = +page || 1
  search = search || ''
  sort = sort || 'default'
  useEffect(
    function () {
      let sortBy;
      let order;
      if (sort === "title" ) {
        sortBy = "title";
      } else  if (sort === "low" ) {
        sortBy = "price";
      }else  if (sort === "high" ) {
        sortBy = "price";
        order = "desc"
      }
      getProductList({ sortBy, search, order, page , setTotalPage })
        .then((data) => {  setdata(data.products); setloading(false);
        } )
    }
    , [sort , search , page])
 
  function handlelist(event) {
   setSearchParams ({...params , search : event.target.value , page : 1}) 
  }
  
  function handlesort(event) {
    setSearchParams ({...params , sort : event.target.value}) 
 }

    if (loading) {
      return (
        <Loading />
      )
    }
 
  return (
   
      <div className='mt-8'>
    <div className='bg-white  flex  justify-between'>
        <Input className="bg-gray-100 m-10 border border-solid border-gray rounded p-1 "  value={search} placeholder='Search' onInput={handlelist}/>   
        <select value={sort} onChange={handlesort} className='bg-gray-100 m-10 border border-solid border-gray rounded p-1'>
                   <option value="default">Default Sort</option>
                   <option value="title">Sort by title</option>
                   <option value="low">Sort by price: low to high</option>
                   <option value="high">Sort by price: high to low</option>
               </select>
           </div>
        
          {Data.length > 0 && <ProductList products={Data} />}
          {Data.length <= 0 && <Notmatch />}
      {totalPage > 1 && range(1, totalPage + 1).map((item) =>
        <Link
          key={item}
          to={"?" + new URLSearchParams({...params , page : item})}
          className={' text-xl px-2 mr-2 rounded-md font-semibold text-white ' + (item === page ? "bg-red-500" : "bg-red-300" )}
          >
          {item}</Link>
)}
  </div>
  )

}

export default Listpage
