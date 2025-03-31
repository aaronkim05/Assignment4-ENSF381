import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import courses from '../data/courses';
import testimonials from '../data/testimonials';

function MainSection() {
    const [featuredCourses, setFeaturedCourses] = useState([]);
    const [featuredTestimonials, setFeaturedTestimonials] = useState([]);
  
    useEffect(() => {
      setFeaturedCourses(courses.sort(() => 0.5 - Math.random()).slice(0, 3));
      setFeaturedTestimonials(testimonials.sort(() => 0.5 - Math.random()).slice(0, 2));
    }, []);
  
    return (
        <main>
            <h1>Welcome to the LMS</h1>
            <p>Explore a variety of courses.</p>
 
            <h2>Featured Courses</h2>
            <div>
                {featuredCourses.map(course => (
                <div key={course.id}>
                    <img src={course.image}/>
                    <h3>{course.name}</h3>
                    <p>{course.instructor}</p>
                </div>
                ))}
            </div>

            <h2>Student Testimonials</h2>
            {featuredTestimonials.map(testimonial => (
            <div key={testimonial.studentName}>
                <p>"{testimonial.review}"</p>
                <b>- {testimonial.studentName}</b>
                <p>{'★'.repeat(testimonial.rating)}</p>
            </div>
            ))}
      </main>
    );
}

export default MainSection;