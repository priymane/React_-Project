import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import Display from '../components/Display/Display';
const Material=() => {
    const{all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product=all_product.find((e)=>e.id ===Number(productId));
    return(
        <div>
        <Breadcrum product={product}/>
        <Display product={product}/>
        </div>
    )
}
export default Material;