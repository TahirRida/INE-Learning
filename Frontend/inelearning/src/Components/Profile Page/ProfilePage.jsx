import React from "react";
import { Avatar } from '@mui/material';
import BannerImage from "../../Assets/home-student-with-books.png";
import CourseCard from './../Feed Page/CourseCard'; // Adjust the import path as per your project structure
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const ProfilePage = () => {
    const username = localStorage.getItem('username');
    const location = useLocation();
    const userOwnedCourses = location.state && location.state.userOwnedCourses ? location.state.userOwnedCourses : [];
    
    console.log("courses:" , userOwnedCourses);

    return (
        <div className="profile-container">
            <div className="profile-info">
                <Avatar alt="User Avatar" src={BannerImage} sx={{ width: 120, height: 120 }} />
                <h2>{username}</h2>
            </div>
            <h3>Posted Videos</h3>
            <div className="course-list">
                {userOwnedCourses.map(course => (
                    <CourseCard key={course.courseId} course={course} />
                ))}
            </div>
        </div>
    );
};

export default ProfilePage;
