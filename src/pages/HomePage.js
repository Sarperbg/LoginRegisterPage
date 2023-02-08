import React from "react";
import Table from "../components/Table";
import axios from "axios";
import { useEffect, useState } from "react";
const HomePage = () => {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  }, []);

  const column = [
    { heading: "CompanyName", value: "name" },
    { heading: "CompanyEmail", value: "email" },
    { heading: "CompanyPhone", value: "phone" },
    { heading: "CompanyCity", value: "address.city" },
  ];

  return (
    <div>
      <h1>Dynamic Table</h1>
      <Table data={dataTable} column={column} />{" "}
    </div>
  );
};

export default HomePage;
