import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import gmailIcon from "./gmail_google_icon.png";
import SearchIcons from "./SearchIcons";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import { Avatar, IconButton } from "@mui/material";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const selectorUser = useSelector(selectUser);

  const dispatch = useDispatch();

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(login());
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="header">
      <div className="header__icons">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={gmailIcon} alt="" />
        <p>Gmail</p>
      </div>

      <div className="header__searchBar">
        <SearchIcons Icons={SearchIcon} />
        <input type="text" placeholder="Search Mail" />
        <SearchIcons Icons={TuneIcon} />
      </div>

      <div className="header__rightSide">
        <SearchIcons Icons={BlurOnIcon} />
        <SearchIcons Icons={NotificationsRoundedIcon} />
        <Avatar onClick={signOut} src={selectorUser?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
