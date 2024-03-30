import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Altthumbnail from "../../Assets/alt-thumbnail.png";
import CourseCard from './../Feed Page/CourseCard'; // Assuming CourseCard is a component for displaying course details
import BannerImage from "../../Assets/home-student-with-books.png";
import { Avatar } from '@mui/material';

const VideoPlayer = () => {
    const location = useLocation();
    const coursePassed = location.state && location.state.coursePassed ? location.state.coursePassed : [];
    const suggestedCourses = location.state && location.state.suggestedCourses ? location.state.suggestedCourses : [];
    const [showThumbnail, setShowThumbnail] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setShowThumbnail(false);
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };


    return (
        <div className='player-wrapper'>
            <div className="video-player-container">
                <div className="video-player-container1">
                <ReactPlayer
                    className="reactplayer"
                    url={coursePassed.video}
                    playing={isPlaying}
                    controls
                    width="100%"
                    height="auto"
                    onPlay={handlePlay}
                    onPause={handlePause}
                    light={showThumbnail ? <img src={coursePassed.thumbnail} alt='Thumbnail' className='thumbnail' /> : null}
                /></div>

 <div className="video-info">
                    <h1 className="video-title">{coursePassed.title}</h1>
                    <div className="avatar-username-container">
                        <Avatar alt="User Avatar" src={BannerImage} sx={{ width: 60, height: 60 }} />
                        <h2 className="username">{coursePassed.courseOwnerId}</h2>
                    </div>
                    <h2 className="description">Description:</h2>
                    <div className="description-container">
                    <div className="video-description">{coursePassed.description}</div></div>
                </div>

            </div>
            <div className="suggested-courses-container">
                <h3>Suggested Courses</h3>
                {suggestedCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default VideoPlayer;