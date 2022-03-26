import React, { useEffect, useState } from "react";
import "./MailList.css";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import KeyboardHideRoundedIcon from "@mui/icons-material/KeyboardHideRounded";
import BrightnessLowRoundedIcon from "@mui/icons-material/BrightnessLowRounded";
import Section from "./Section";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function MailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="mailList">
      <div className="mailList__settings">
        <div className="settings__left">
          <CheckBoxOutlineBlankRoundedIcon />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="settings_right">
          <IconButton>
            <ArrowBackIosNewRoundedIcon />
          </IconButton>
          <IconButton>
            <ArrowForwardIosRoundedIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideRoundedIcon />
          </IconButton>
          <IconButton>
            <BrightnessLowRoundedIcon />
          </IconButton>
        </div>
      </div>
      <div className="settings__middle">
        <Section Icon={InboxRoundedIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleRoundedIcon} title="Social" color="#1B74E8" />
        <Section
          Icon={LocalOfferRoundedIcon}
          title="Promotions"
          color="green"
        />
      </div>

      <div className="emailList__list">
        {emails.map(({ id, data: { message, subject, to, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
}

export default MailList;
