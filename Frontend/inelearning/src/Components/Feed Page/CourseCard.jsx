import React from 'react';
import './../../styles/card.css'; // Import the CSS file

const CourseCard = ({ course }) => {
  return (
    <div className="course-card-item">
      <img className="course-thumbnail" src={course.thumbnail} alt={course.title} />
      <div className="card-content">
        <h3>{course.title}</h3>
        <p>{course.courseOwnerId}</p>
      </div>
    </div>
  );
};

export default CourseCard;
