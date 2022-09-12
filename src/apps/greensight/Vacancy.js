import React from "react";
import { useState, useEffect, useRef, useId } from "react";
import "./Vacancy.css";
import classNames from "classnames";

export default function Vacancy(props) {
  const [description, setDescription] = useState("");
  const [expandedDescription, setExpandedDescription] = useState(false);

  const expandId = useId();
  const expandRef = useRef();

  const address = (props) => {
    if (props.vacancy.address) {
      return props.vacancy.address.raw;
    }
    if (props.vacancy.area) {
      return props.vacancy.area.name;
    }
    return "Not provided";
  };

  const salary = (props) => {
    if (props.vacancy.salary) {
      if (props.vacancy.salary.from && props.vacancy.salary.to) {
        return `${props.vacancy.salary.from} - ${props.vacancy.salary.to}`;
      }
      if (props.vacancy.salary.from) {
        return `>=${props.vacancy.salary.from}`;
      }
      if (props.vacancy.salary.to) {
        return `<=${props.vacancy.salary.to}`;
      }
    }
    return "Not provided";
  };

  useEffect(() => {
    fetch(props.vacancy.url)
      .then((res) => res.json())
      .then((data) => setDescription(data.description));
  }, [props.vacancy.url]);

  return (
    <div className="vacancy-block">
      <div className="vacancy-block__left-part">
        <div className="vacancy-block__logo">
          <img
            src={
              props.vacancy.employer.logo_urls
                ? props.vacancy.employer.logo_urls["original"]
                : "/noEmployerLogo.png"
            }
            alt="logo"
          />
        </div>
        <p className="mb-15">
          <span className="text-gray">Form: </span>
          <span>{props.vacancy.schedule.name}</span>
        </p>
        <p className="mb-15">
          <span className="text-gray">Company: </span>
          <span>{props.vacancy.employer.name}</span>
        </p>
        <p className="mb-15">
          <span className="text-gray">Address: </span>
          <span>{address(props)}</span>
        </p>
        <p className="mb-15">
          <span className="text-gray">Salary: </span>
          <span>{salary(props)}</span>
        </p>
      </div>
      <div className="vacancy-block__right-part">
        <p className="vacancy-block__name">{props.vacancy.name}</p>
        <div
          className={classNames({
            "vacancy-block__description_gradient-enabled": !expandedDescription,
            "vacancy-block__description_gradient-disabled": expandedDescription,
          })}
        >
          <div
            className={classNames({
              "vacancy-block__description_hidden": !expandedDescription,
              "vacancy-block__description_expanded": expandedDescription,
            })}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <button
          ref={expandRef}
          onClick={() => setExpandedDescription((prevState) => !prevState)}
          id={expandId}
          className="vacancy-block__expand-input"
        >
          {expandedDescription ? "close" : "show more"}
        </button>
      </div>
    </div>
  );
}
