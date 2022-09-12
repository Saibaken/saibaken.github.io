import React from "react";
import { useId, useRef } from "react";
import "./FeedbackForm.css";

export default function FeedbackForm() {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const commentId = useId();

  const formRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current)
    let response = "";
    for (let [key, value] of data) {
        response+=`${key} - ${value}\n`
    }
    alert(response);
  };

  return (
    <>
      <p className="header">Leave a request</p>
      <form onSubmit={submitHandler} className="feedback-form" ref={formRef}>
        <div className="feedback-form__left">
          <label htmlFor={nameId} className="feedback-form__label">
            Your name
          </label>
          <input
            type="text"
            name="name"
            id={nameId}
            className="feedback-form__input"
            placeholder="Please introduce yourself"
            required
          />
          <label htmlFor={emailId} className="feedback-form__label">
            Email
          </label>
          <input
            type="text"
            name="email"
            id={emailId}
            className="feedback-form__input"
            placeholder="ivanov@mail.ru"
            pattern="^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,}$"
            required
          />
          <label htmlFor={phoneId} className="feedback-form__label">
            Phone number
          </label>
          <input
            type="text"
            name="phone"
            id={phoneId}
            className="feedback-form__input"
            placeholder="+7 (999) 123-45-78"
            pattern="^((\\+[7])|[8]){1}[0-9]{10}"
          />
          <label htmlFor={commentId} className="feedback-form__label">
            Comment
          </label>
          <input
            type="text"
            name="comment"
            id={commentId}
            className="feedback-form__input"
            placeholder="Message text"
            required
          />
          <input type="submit" value="Send" className="feedback-form__submit" />
          <p className="feedback-form__disclaimer">
            By clicking "Send" you confirm your consent to the <br />
            <a href="about:blank" className="disclaimer__link">
              processing of personal data
            </a>
          </p>
        </div>
        <div className="feedback-form__right">
          <p className="fs-18 mtb-2">
            We will advise you and help you start a new project
          </p>
          <p className="feedback-form__contacts">
            +7 499 391-66-69
            <br />
            mail@greensight.ru
          </p>
          <p className="fs-16 mtb-2">
            Moscow, Zelenograd, Central Ave.,
            <br /> bldg. 305, 3rd floor
          </p>
          <p className="fs-16 mtb-2">How to get there?</p>
        </div>
      </form>
    </>
  );
}
