import React, { useState } from "react";
import Logo from "../Assets/inelogo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
const Navbar = () => {
 /* const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/home", // corrected path
    },
    {
      text: "About",
      icon: <InfoIcon />,
      path: "/about", // corrected path
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      path: "/testimonial", // corrected path
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/contact", // corrected path
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
      path: "/cart", // corrected path
    },
  ];
*/
function handleNavLinkClick(event, id) {
  event.preventDefault();
  scrollToSection(id);
}

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" className="nav-logo-img" /> 
      </div>
      <div className="navbar-links-container">
      <a href="#about" onClick={(event) => handleNavLinkClick(event, 'about')}>About</a>
      <a href="#work" onClick={(event) => handleNavLinkClick(event, 'work')}>How it works</a>
      <a href="#testimonial" onClick={(event) => handleNavLinkClick(event, 'testimonial')}>Testimonials</a>
        <button className="primary-button">Login</button>
        <button className="primary-button2">Sign Up</button>
      </div>
      
 {/*    <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem button key={item.text} component={Link} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
            </Drawer>*/}
    </nav>
  );
};

export default Navbar;
