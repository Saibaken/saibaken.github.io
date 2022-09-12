import { useEffect, useState } from "react";
import Vacancy from "./Vacancy";
import FeedbackForm from "./FeedbackForm";
import "./App.css";

function App() {
  const [vacancies, setVacancies] = useState([]);
  useEffect(() => {
    fetch("https://api.hh.ru/vacancies?per_page=5")
      .then((res) => res.json())
      .then((data) => setVacancies(data.items));
  }, []);

  return (
    <div className="greensight-container">
      <div className="container">
      <p className="header">List of vacancies</p>
        {vacancies.map((vacancy) => {
          return <Vacancy key={vacancy.id} vacancy={vacancy} />;
        })}
      <FeedbackForm/>
      </div>
    </div>
  );
}

export default App;
