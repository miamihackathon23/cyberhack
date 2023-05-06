import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  function detectFraud(input) {
    // your fraud detection logic here
    // return true if fraudulent, false otherwise
  }

  // const form = document.querySelector("#file-upload");
  const resultDiv = document.querySelector("#result");

  const [file, setFile] = useState();
  const [result, setResult] = useState();
  const fileReader = new FileReader();

  const onChange = (e) => {
    setFile(e.target.files[0]);
    console.log('e.target.files[0]', e.target.files[0])
  };

  const postData = (input) => {
    axios.post('/detect_fraud', input);
  }

  // const getResult = () => {
  //   axios.get('/results')
  //     .then((response) => {
  //       setResult(response)
  //     })
  // }



  const onSubmit = (e) => {
    e.preventDefault();
  
    if (file) {
      fileReader.onload = (e) => {
        const csvData = e.target.result;
        const dataArray = csvData.split("\n").map((row) => row.split(","));
        console.log('array: ', dataArray);
        const input = dataArray.map((value) => parseFloat(value));
        postData(input);
  
        axios.get('/results')
          .then((response) => {
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
  
            setResult(response);
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };
  
      fileReader.readAsText(file);
    }
  };
  

  return (
    <>
      <header>CYBER VIGILANTE</header>

      <form id="file-upload">
        <label for="csv-file">Upload CSV File:</label>
        <input type={"file"} id={"csv-file"} accept={".csv"} onChange={onChange} />
        <button onSubmit={ (e) => onSubmit(e)} type="submit" id="submit-btn">Submit</button>
      </form>
        <div id="result"> {result ? result : null} </div>
    </>
  );

}

export default FileUpload;