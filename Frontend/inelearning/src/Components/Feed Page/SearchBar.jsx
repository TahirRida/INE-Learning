import React, { useState } from "react";
import Logo from "../../Assets/inelogo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Paper, IconButton, Stack } from '@mui/material';
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "../../styles/searchbar.css";

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const username = localStorage.getItem('username');
    const onhandleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm) {
            navigate(`/SearchFeed`, { state: { searchTerm } });
            setSearchTerm("");
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-logo-container">
                <img src={Logo} alt="Logo" className="nav-logo-img" />
            </div>
            <div className="navbar-middle">
                <Stack direction="row" alignItems="center">
                    <Paper
                        component="form"
                        onSubmit={onhandleSubmit}
                        className="search-input"
                        sx={{
                            borderRadius: "35px", // Apply border radius here
                            padding: "3px",
                            border: "0.5px solid #A367B1",
                            fontSize: "14px",
                            width: "80%",
                            marginRight: "8px"
                        }}
                    >
                        <input
                            className="search-input2"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            placeholder="Search Here..."
                            sx={{
                                border: "none",
                                flex: 1,
                                outline: "none",
                                fontSize: "medium",
                                marginLeft: "8px"
                            }}
                        />
                        <IconButton type="submit" sx={{ p: "10px", color: "#A367B1" }}>
                            <Search />
                        </IconButton>
                    </Paper>
                </Stack>
            </div>
            <div className="navbar-right">
                <div className="hello-rida-container">
                    <p>Hello {username}</p>
                    {/* Add rounded picture here */}
                </div>

            </div>
        </nav>
    );
};

export default SearchBar;
