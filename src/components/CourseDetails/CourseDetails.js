import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './courseDetails.css'
const CourseDetails = (props) => {
    const { title, price, headline, image_480x270: img, visible_instructors: { display_name: instructor } } = props.course;
    const handleAddProduct = props.handleAddProduct;
    const newCart = props.cart;
    console.log(newCart);
    return (
        <Container>
            <Row>
                <div className="col-md-8 mt-2 border p-3">
                        <div className="course-image">
                            <img className="rounded img-fluid" src={img} alt="" />
                        </div>
                        <div className="course-details">
                            <h2>{title}</h2>
                            <p><small>{headline}</small></p>
                            <p style={{ color: 'gray', fontWeight: 'bold' }} ><small>by: {instructor}</small></p>
                            <h2 style={{ color: 'red', fontWeight: 'bold' }} >{price}</h2>
                            <button className="btn btn-primary" onClick={() => handleAddProduct(props.course)} >Add to Cart</button>
                        </div>
                </div>
                <div className="col-md-4">
                    <div className="cart">
                        {newCart.length}
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default CourseDetails;