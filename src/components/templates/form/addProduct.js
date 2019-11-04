import React from 'react';
import './addProduct.scss';

const AddProductForm = ()  => {
    return (
        <div className="add-product">
            <div className="add-product__title">
                <h4>AGREGAR PRODUCTO</h4>
            </div>
            <form className="add-product__form">
                <input id="product_name" placeholder="Nombre del producto" />
            </form>
        </div>
    )
}

export default AddProductForm;
