import React, { useState } from "react";
import "./DiseaseSearch.css";
import axios from "axios";

const DiseaseSearch = () => {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);

  const handleSymptomsChange = (event) => {
    setSymptoms(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchDisease();
    }
  };

  const searchDisease = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/diseasesearch?disease_name=${symptoms}`
      );
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="center"
      style={{
        padding: "30px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <h2 className="App-header">Disease Search</h2>
      </div>
      <div>
        <input
          type="text"
          value={symptoms}
          onChange={handleSymptomsChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter symptoms"
          className={"symptomsInput"}
        />
        <button className="btn btn-primary" onClick={searchDisease}>
          Search
        </button>
      </div>

      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="center"
      >
        {result && (
          <div style={{ margin: "10px" }} className="center">
            <h3>{result["Disease Name"]}</h3>
          </div>
        )}
        {result && (
          <div className="center row">
            {result["Prevalence"] && (
              <p>
                <strong>Prevalence:</strong> {result["Prevalence"]}
              </p>
            )}
            {result["Symptoms"] && (
              <p>
                <strong>Symptoms:</strong> {result["Symptoms"]}
              </p>
            )}

            {result["Diagnosis"] && (
              <p>
                <strong>Diagnosis:</strong> {result["Diagnosis"]}
              </p>
            )}
            {result["Treatments"] && (
              <p>
                <strong>Treatments:</strong> {result["Treatments"]}
              </p>
            )}
            {result["Preventive Measures"] && (
              <p>
                <strong>Preventive Measures:</strong>{" "}
                {result["Preventive Measures"]}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseaseSearch;
