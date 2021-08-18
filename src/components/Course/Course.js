import React, { useEffect, useState } from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';

const Course = () => {
    // eslint-disable-next-line
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('https://mocki.io/v1/4e887ae0-4b90-45ed-86a0-8d8b368fe6d9')
            .then(response => response.json())
            .then(data =>
                setCourse(data)
            )
    }, [])

    return (
        <div>
            {
                course.map(course => <CourseDetails course={course} key={course.tracking_id} > </CourseDetails>)
            }
        </div>
    );
};

export default Course;