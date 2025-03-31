import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import courses from './data/courses';
import testimonials from './data/testimonials';
import './App.css';

function Header() {
    return (
        <header className="header">
            <img src="/images/logo.jpg" className="logo" />
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
  </header>
    )
}
  

function MainSection() {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [featuredTestimonials, setFeaturedTestimonials] = useState([]);

  useEffect(() => {
    setFeaturedCourses(courses.sort(() => 0.5 - Math.random()).slice(0, 3));
    setFeaturedTestimonials(testimonials.sort(() => 0.5 - Math.random()).slice(0, 2));
  }, []);

  return (
    <main className="main-section">
      <section className="about">
        <h2>Welcome to Our LMS</h2>
        <p>Explore a variety of courses and learn from top instructors.</p>
      </section>
      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="courses-list">
          {featuredCourses.map(course => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.name} />
              <h3>{course.name}</h3>
              <p>{course.instructor}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="testimonials">
        <h2>Student Testimonials</h2>
        {featuredTestimonials.map(testimonial => (
          <div key={testimonial.studentName} className="testimonial">
            <p>"{testimonial.review}"</p>
            <strong>- {testimonial.studentName}</strong>
            <p>{'★'.repeat(testimonial.rating)}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2025 Learning Management System. All rights reserved.</p>
        </footer>
    )
}

export default function Homepage() {
    return (
        <div>
            <Header />
            <MainSection />
            <Footer />
        </div>
    );
}





