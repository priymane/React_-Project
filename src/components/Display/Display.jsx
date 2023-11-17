import React from 'react';
import './Display.css'
import star_icon from '../assests/star_icon.png'
import star_dull_icon from '../assests/star_dull_icon.png'
const Display = (props) => {
    const{product}=props;
    return(
        <div className='dispaly'>
            <div className='dispaly-left'>
                <div className='display-img-list'>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className='dispaly-img'>
                    <img  className='display-main-img' src={product.image} alt="" />
                </div>

            </div>
            <div className='display-right'>
                    <h1>{product.name}</h1>
                    <div className='display-right-star'>
                        <img src={star_icon} alt=""/>
                        <img src={star_icon} alt=""/>
                        <img src={star_icon} alt=""/>
                        <img src={star_icon} alt=""/>
                        <img src={star_dull_icon} alt=""/>
                        <p>(120)</p>
                    </div>

            </div>
            </div>
    )
}
export default Display;