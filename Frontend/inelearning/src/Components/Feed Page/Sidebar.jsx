import React from 'react';
import { Stack } from "@mui/material";

const Sidebar = ({ categories, handleCategoryClick, setSelectedCategory, selectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: "#FFD1E3",
        flexDirection: { md: "column" },
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        paddingLeft: 0,
        paddingRight: 0,
        width: { sx: "auto", md: "200px" }, // Adjust the width here
      }}
    >
      <h3>Categories</h3>
      {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => handleCategoryClick(category)
        }
        style={{
          background: category === selectedCategory && "#392467",
          color: category === selectedCategory ? "#FFD1E3" : "#392467",
        }}
        key={category}
      >
                  <span
            style={{
              opacity: "1",
            }}
          >
            {category}
          </span>
      </button>
            ))}

    </Stack>
  );
};

export default Sidebar;