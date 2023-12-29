// import React from 'react'
// // import ReactDOM from 'react-dom'
 import {createRoot} from 'react-dom/client'
// import EmployeeList from './EmployeeList.jsx'

// const root = createRoot(document.getElementById('content'))
// root.render(
//   <React.StrictMode>
//     <EmployeeList />
//   </React.StrictMode>,
// )
// employees.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './EmployeeList.jsx';

ReactDOM.render(
  <React.StrictMode>
    <EmployeeList />
  </React.StrictMode>,
  document.getElementById('content')
);
