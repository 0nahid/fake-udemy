import React from 'react';
import './courseDetails.css'
const CourseDetails = (props) => {
    const { title, price, headline, image_480x270: img, visible_instructors: { display_name: instructor } } = props.course;
    const handleAddProduct = props.handleAddProduct;
    return (
        <div>
            <div className="course-image">
                <img src={img} alt="" />
            </div>
            <div className="course-details">
                <h2>{title}</h2>
                <p><small>{headline}</small></p>
                <p style={{ color: 'gray', fontWeight: 'bold' }} ><small>by: {instructor}</small></p>
                <h2 style={{ color: 'red', fontWeight: 'bold' }} >{price}</h2>
                <button className="btn btn-primary" onClick={() => handleAddProduct(props.course)} >Add to Cart</button>  
            </div>
            <div className="cart">
                {props.cart.length}
            </div>
        </div>
    );
};

export default CourseDetails;