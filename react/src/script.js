// const form = document.querySelector("#file-upload");
// const resultDiv = document.querySelector("#result");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const fileInput = document.querySelector("#csv-file");
//   const file = fileInput.files[0];
//   const reader = new FileReader();
//   reader.readAsText(file);
//   reader.onload = () => {
//     const csvData = reader.result;
//     const dataArray = csvData.split("\n").map((row) => row.split(","));
//     const input = dataArray[0].map((value) => parseFloat(value));
//     const isFraudulent = detectFraud(input);
//     if (isFraudulent) {
//       resultDiv.innerText = "Potentially fraudulent behavior detected!";
//       resultDiv.style.color = "red";
//       resultDiv.style.fontFamily = "'Roboto Mono', monospace";
//       resultDiv.style.fontSize = "1.5em";
//     } else {
//       resultDiv.innerText = "No fraudulent behavior detected.";
//       resultDiv.style.color = "green";
//       resultDiv.style.fontFamily = "'Roboto Mono', monospace";
//       resultDiv.style.fontSize = "1.5em";
//     }
//   };
// });

// function detectFraud(input) {
//   // your fraud detection logic here
//   // return true if fraudulent, false otherwise
// }