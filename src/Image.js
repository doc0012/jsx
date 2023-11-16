import React from 'react' ;
import product from './product';

const Image =() => {
    return (
    <img src={product.image} alt='Product' className='TeslaImg' style={{width:"800px",alignContent:'center' }}/>
    )
};

export default Image;