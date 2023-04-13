import React, { useState } from "react";

function PatientRecord({ marketplace }) {
  const [patientName, setPatientName] = useState("");
  const [diagnosed, setDiagnosed] = useState("");
  const [medicineSuggested, setMedicineSuggested] = useState("");
  const [patientFile, setPatientFile] = useState("");
  const handlePatientRecord = async () => {
    await (
      await marketplace.addPatientRecord(
        patientName,
        diagnosed,
        medicineSuggested,
        patientFile
      )
    ).wait();
  };
  return (
    <div>
      <h1>Add Patient History</h1>
      <div>
        <label>Patient Name:</label>
        <input
          type="text"
          onChange={(e) => setPatientName(e.target.value)}
          value={patientName}
        />
      </div>
      <div>
        <label>Diagnosed With:</label>
        <input
          type="text"
          onChange={(e) => setDiagnosed(e.target.value)}
          value={diagnosed}
        />
      </div>
      <div>
        <label>Medicine:</label>
        <input
          type="text"
          onChange={(e) => setMedicineSuggested(e.target.value)}
          value={medicineSuggested}
        />
      </div>
      <div>
        <label>PatientFile:</label>
        <input
          type="text"
          onChange={(e) => setPatientFile(e.target.value)}
          value={patientFile}
        />
      </div>
      <button onClick={handlePatientRecord} type="submit">
        Add Record
      </button>
    </div>
  );
}
export default PatientRecord;
