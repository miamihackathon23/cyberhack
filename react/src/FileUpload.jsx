import React, { useState, useRef } from 'react';

const FileUpload = () => {
  function detectFraud(input) {
    // your fraud detection logic here
    // return true if fraudulent, false otherwise
  }

  // const form = document.querySelector("#file-upload");
  const resultDiv = document.querySelector("#result");

  const [file, setFile] = useState();
  const fileReader = new FileReader();

  const onChange = (e) => {
    setFile(e.target.files[0]);
};


  const onSubmit = (e) => {
    e.preventDefault();

    if (file) {
        // fileReader.onload = (e) => {
        //     const csvOutput = e.target.result;
        // };
        fileReader.readAsText(file);

        fileReader.onload = () => {
          const csvData = fileReader.result;
          const dataArray = csvData.split("\n").map((row) => row.split(","));
          const input = dataArray[0].map((value) => parseFloat(value));
          const isFraudulent = detectFraud(input);
          if (isFraudulent) {
            resultDiv.innerText = "Potentially fraudulent behavior detected!";
            resultDiv.style.color = "red";
            resultDiv.style.fontFamily = "'Roboto Mono', monospace";
            resultDiv.style.fontSize = "1.5em";
          } else {
            resultDiv.innerText = "No fraudulent behavior detected.";
            resultDiv.style.color = "green";
            resultDiv.style.fontFamily = "'Roboto Mono', monospace";
            resultDiv.style.fontSize = "1.5em";
          }

        }

    }
  };

  return (
    <div className="App">
      <header>CYBERVIGILANTE</header>

      <form id="file-upload">
        <label for="csv-file">Upload CSV File:</label>
        <input type={"file"} id={"csv-file"} accept={".csv"} onChange={onChange} />
        <button onSubmit={ (e) => onSubmit(e)} type="submit" id="submit-btn">Submit</button>
      </form>
      <div id="result"></div>
    </div>
  );

}

export default FileUpload;