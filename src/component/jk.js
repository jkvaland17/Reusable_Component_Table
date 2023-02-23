// import React from 'react';

// const Button = ({ onClick, label }) => {
//   return (
//     <button onClick={onClick}>{label}</button>
//   );
// };

// export default Button;

// import React from 'react';
// import Button from './Button';

// const Table = ({ data }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map(item => (
//           <tr key={item.id}>
//             <td>{item.id}</td>
//             <td>{item.name}</td>
//             <td>
//               <Button onClick={() => console.log(`Delete item ${item.id}`)} label="Delete" />
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;
