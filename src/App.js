import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch('sampledata.json')
      .then((res) => res.json())
      .then((d) => setData(d))
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  const MaxStaff = () =>  {
    let maxstaffcount = 0;
    let maxstaffId = null;
    data.forEach((emp, idx) =>{
        if ( emp.stafflist && (maxstaffcount < emp.stafflist.length)) {
        maxstaffcount = emp.stafflist.length;
        maxstaffId = emp.id;
      }
    });
    return maxstaffId;
  }

   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h3>List of Names</h3>

        <table>
          <thead>
            <tr>
              <td className="Table-Header">ID</td>
              <td className="Table-Header">Name</td>
              <td className="Table-Header">Dept Name</td>
              <td className="Table-Header">Salary</td>
              <td className="Table-Header">Head Id</td>
              <td className="Table-Header">List</td>
            </tr>
            </thead>
            <tbody>
        {data.map((dataObj, index) => {
          return (
            <tr className="Name-Card" key={dataObj.id}>
              <td className="Name-List">{dataObj.id}</td>
              <td className="Name-List">{dataObj.name}</td>
              <td className="Name-List">{dataObj.deptname}</td>
              <td className="Name-List">{dataObj.salary}</td>
              <td className="Name-List">{dataObj.headid}</td>
              <td className="Name-List">{dataObj.stafflist && dataObj.stafflist.join(',')}</td>
            </tr>
          );
        })}
        </tbody>
        </table>

        <h3>Employee with Maximum List of Staff : {MaxStaff()}</h3>

      </header>
    </div>
  );
}

export default App;