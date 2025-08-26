import React,{useState} from 'react';
import Product from './Product';
export default function ProductList ({products}){
   

 
    return(
     <div>
       
       <div className='flex flex-wrap bg-white '>
       { products.map(function({category,title,thumbnail,price,sku}){
        return(
        <Product 
        title={title} 
        category={category} 
        thumbnail={thumbnail} 
            price={price}
            sku={sku}
        />
      )
    } )}
       </div>
     </div>
       )
}
   

























































































































//     <div className='flex flex-wrap bg-white '>
    // <Product thumbnail={"https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Coffee-PNG/Cup_of_Coffee_PNG_Clipart.png?m=1629830717"} 
    // category={'Mugs'} title={"White Printed Coffee Mug"} price={"15.00"}/>
    // <Product thumbnail={"https://pics.clipartpng.com/Red_T_Shirt_PNG_Clip_Art-3105.png"}  category={"Tshirts"} title={"Red Printed Tshirt"} price={"34.00"}/>
    // <Product thumbnail={"https://www.pikpng.com/pngl/m/113-1135831_white-mug-png-transparent-white-mug-png-clipart.png"} category={"Mugs"} title={"Father's Day Coffee Mug"} price={"19.00"}/>
    // <Product thumbnail={"https://www.pngkey.com/png/detail/390-3909490_white-coffee-mug-png-flat-white-mugs.png"} category={"Mugs"} title={"Personalised Mug"} price={"15.00"}/>
    // <Product thumbnail={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ip6OjjN8IMSt-CWgTGPgK5ro6XefOMn9Qw&s"} category={"Tshirts"} title={"Typography Teal Printed Tshirt"} price={"32.00"}/>
    // <Product thumbnail={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLQiIA1zYyxg4OhXw8LkyI0JUIRbZpMR_DEtHBG3LwxfJK18cwVyKVfDmiB_Qi1YBJ0U&usqp=CAU"} category={"Tshirts"} title={"Printed Dark Blue Tshirt"} price={"34.00"}/>
    // <Product thumbnail={"https://png.pngtree.com/png-vector/20220527/ourlarge/pngtree-unisex-colored-t-shirt-mock-up-png-image_4757841.png"} category={"Tshirts"} title={"Printed Tshirt Coffee Black Color"} price={"25.00"}/>
    // <Product thumbnail={"https://png.pngtree.com/png-clipart/20220909/original/pngtree-color-t-shirt-mockups-design-colorful-png-image_8505038.png"} category={"Tshirts"} title={"Printed Green Tshirt"} price={"28.00"}/>
    // <Product thumbnail={"https://images.openai.com/thumbnails/url/KSwbZnicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4M9SjXLbAoCssq8bAITzL1DqkstUzMsQyx0K1ICiq2KM0yjip0dazIi0hOCfauMizPzvR0KrdwSXUNL1crBgAeqiot"} category={"Tshirts"} title={"Printed Brown Tshirt"} price={"25.00"}/>
    // </div>
    