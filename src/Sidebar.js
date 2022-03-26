import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SideOptions from "./SideOptions";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import LabelImportantRoundedIcon from "@mui/icons-material/LabelImportantRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import DuoRoundedIcon from "@mui/icons-material/DuoRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import NoteRoundedIcon from "@mui/icons-material/NoteRounded";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddRoundedIcon fontSize="larger" />}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SideOptions
        Icons={InboxRoundedIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SideOptions Icons={StarRoundedIcon} title="Starred" number={54} />
      <SideOptions
        Icons={AccessTimeFilledRoundedIcon}
        title="Snoozed"
        number={54}
      />
      <SideOptions Icons={SendRoundedIcon} title="Send" number={54} />
      <SideOptions
        Icons={LabelImportantRoundedIcon}
        title="Important"
        number={54}
      />
      <SideOptions Icons={NoteRoundedIcon} title="Draft" number={54} />
      <SideOptions Icons={ExpandMoreRoundedIcon} title="More" number={54} />

      <div className="sidebarIcons__contact">
        <IconButton>
          <PeopleRoundedIcon />
        </IconButton>
        <IconButton>
          <DuoRoundedIcon />
        </IconButton>
        <IconButton>
          <CallRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Sidebar;
