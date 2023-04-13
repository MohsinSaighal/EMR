import React, { useState } from "react";

function DoctorRegistration({ marketplace }) {
  const [doctorName, setDoctorName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const handleDoctorRegistration = async () => {
    await (
      await marketplace.registerDoctor(
        doctorName,
        specialization,
        registrationNo
      )
    ).wait();
  };
  return (
    <div>
      <h1>Doctor Registration</h1>
      <div>
        <label>Doctor Name:</label>
        <input
          type="text"
          onChange={(e) => setDoctorName(e.target.value)}
          value={doctorName}
        />
      </div>
      <div>
        <label>Specialization:</label>
        <input
          type="text"
          onChange={(e) => setSpecialization(e.target.value)}
          value={specialization}
        />
      </div>
      <div>
        <label>Registration No:</label>
        <input
          type="text"
          onChange={(e) => setRegistrationNo(e.target.value)}
          value={registrationNo}
        />
      </div>
      <button onClick={handleDoctorRegistration} type="submit">
        Register Doctor
      </button>
    </div>
  );
}
export default DoctorRegistration;
