import React from "react";
import "./EmailRow.css";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import { IconButton } from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import LabelImportantRoundedIcon from "@mui/icons-material/LabelImportantRounded";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";
import { auth } from "./firebase";
import { login } from "./features/userSlice";

function EmailRow({ title, description, time, subject, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({ title, description, time, subject, id }));
    navigate("/mail");
  };

  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow__options">
        <CheckBoxOutlineBlankRoundedIcon />
        <IconButton>
          <StarOutlineRoundedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantRoundedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
