import React, { useState, useEffect } from 'react';

const FileUpload = () => {
  return (
    <div className="App">
      <header className="App-header">CYBERVIGILANTE
      </header>

      <form id="file-upload">
        <label for="csv-file">Upload CSV File:</label>
        <input type="file" id="csv-file" accept=".csv" />
        <button type="submit" id="submit-btn">Submit</button>
      </form>
      <div id="result"></div>
    </div>
  );

}

export default FileUpload;