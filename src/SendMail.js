import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import { firebase } from "@firebase/app";

function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = async (data) => {
    // console.log(data);

    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>

      <form onSubmit={handleSubmit(submitData)}>
        <input
          {...register("to", { required: true })}
          type="email"
          placeholder="To"
        />

        {errors.to && <p className="sendMail__errors"> To is required</p>}

        <input
          {...register("subject", { required: true })}
          type="text"
          placeholder="Subject"
        />

        {errors.subject && (
          <p className="sendMail__errors"> Subject is required</p>
        )}

        <input
          {...register("message", { required: true })}
          type="text"
          placeholder="Message..."
          className="sendMail__message"
        />

        {errors.message && (
          <p className="sendMail__errors"> Message is required</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
