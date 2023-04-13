import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const SearchBar = ({ marketplace }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const handleSearch = async () => {
    try {
      // Call your blockchain function here and pass searchTerm as an argument
      // Example: const result = await callBlockchainFunction(searchTerm);
      // Update searchResult state with the returned result
      const result = await marketplace.getPatientRecordByName(searchTerm);
      setSearchResult(result);
      setOpen(true);
    } catch (error) {
      console.error("Error in blockchain function:", error);
      setError(error);
      // Handle error as needed
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Patient Name Here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {open ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Serial Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Diagnose With</th>
              <th>Medicine Suggested</th>
              <th>Patient File</th>
            </tr>
          </thead>
          <tbody>
            <tr key={searchResult.serialId}>
              <td>{searchResult.serialId.toString()}</td>
              <td>{searchResult.patientName}</td>
              <td>{"Male"}</td>
              <td>{"30"}</td>
              <td>{searchResult.diagnosedWith}</td>
              <td>{searchResult.medicineSuggested}</td>
              <td>{searchResult.patientFile}</td>
            </tr>
          </tbody>
        </Table>
      ) : null}
    </div>
  );
};

export default SearchBar;
