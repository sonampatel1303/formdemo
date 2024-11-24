import React, { useEffect, useState } from "react";
const DepartmentList = () => {
  const [pets, SetPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      const response = await fetch("https://localhost:7188/api/Pets");
      const data = await response.json();
      SetPets(data);
      setLoading(false);
    };
    fetchPets();
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <ul>
            {pets.map((department) => (
              <li key={department.id}>{department.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default DepartmentList;