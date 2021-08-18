import React from 'react';
import Cart from '../Cart/Cart';
import './courseDetails.css'
const CourseDetails = (props) => {
    const { title, price, headline, image_480x270: img, visible_instructors: { display_name: instructor } } = props.course;
    return (
        <div className="course">
            <div className="course-details">
                <div className="course-image">
                    <img src={img} alt="" />
                </div>
                <div className="course-details">
                    <h1>{title}</h1>
                    <p><small>{headline}</small></p>
                    <h2 style={{ color: 'red', fontWeight: 'bold' }} >{price}</h2>
                    <p><small>{instructor}</small></p>
                </div>
            </div>
            <div className="cart-details">
                <Cart></Cart>
            </div>
        </div >

    );
};

export default CourseDetails;