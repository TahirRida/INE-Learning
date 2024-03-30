import React, { useState } from "react";
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import BannerImage from "../../Assets/home-student-with-books.png";
import CourseCard from './../Feed Page/CourseCard';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './../../styles/profile.css';
import BannerBackground from "../../Assets/home-banner-background.png";



const ProfilePage = () => {
    const username = localStorage.getItem('username');
    const location = useLocation();
    const [userOwnedCourses, setUserOwnedCourses] = useState(location.state && location.state.userOwnedCourses ? location.state.userOwnedCourses : []);
    const [openDialog, setOpenDialog] = useState(false);
    const [updatedValues, setUpdatedValues] = useState({});
    const [selectedCourseId, setSelectedCourseId] = useState('');

    const handleClickOpen = (courseId) => {
        setSelectedCourseId(courseId);
        const selectedCourse = userOwnedCourses.find(course => course.courseId === courseId);
        setUpdatedValues(selectedCourse);
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
        setUpdatedValues({});
        setSelectedCourseId('');
    };

    const handleChange = (event, attribute) => {
        const { value } = event.target;
        if (attribute === 'title' || attribute === 'description') {
            setUpdatedValues(prevState => ({
                ...prevState,
                [attribute]: value
            }));
        }
    };

    const handleDeleteCourse = async (courseId) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("Unauthorized");
            }
    
            await axios.delete(`http://localhost:8080/api/courses/${courseId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            const updatedCourses = userOwnedCourses.filter(course => course.courseId !== courseId);
            setUserOwnedCourses(updatedCourses);
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };
    
    const handleUpdate = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("Unauthorized");
            }

            
            const updatedCourse = await axios.put(`http://localhost:8080/api/courses/${selectedCourseId}`, {
                ...updatedValues, 
               
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const updatedCourses = userOwnedCourses.map(course => {
                if (course.courseId === selectedCourseId) {
                    return updatedCourse.data; 
                }
                return course;
            });

            setUserOwnedCourses(updatedCourses);
            handleClose();
        } catch (error) {
            console.error('Error updating course:', error);
        }
    };

    return (
        <div className="profile-containerAll">
           
        <div className="profile-container">
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
        </div>
            <div className="profile-info">
                <Avatar alt="User Avatar" src={BannerImage} sx={{ width: 120, height: 120 }} />
                <h2>Welcome {username}</h2>
            </div>
            <h3>Here are your posted videos :</h3>
            <div className="course-list">
                {userOwnedCourses.map(course => (
                    <div key={course.courseId} className="course-card">
                        <CourseCard course={course} />
                        <Button className="update-button" onClick={() => handleClickOpen(course.courseId)}>Update</Button>
                        <Button className="delete-button"onClick={() => handleDeleteCourse(course.courseId)}>Delete</Button>
                    </div> 
                ))}
            </div>

            <Dialog open={openDialog} onClose={handleClose}>
                <DialogTitle>Update Course</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Title"
                        value={updatedValues.title || ''}
                        onChange={(event) => handleChange(event, 'title')}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Description"
                        value={updatedValues.description || ''}
                        onChange={(event) => handleChange(event, 'description')}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
        </div>
    );
};

export default ProfilePage;
