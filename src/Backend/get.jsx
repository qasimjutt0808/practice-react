// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// function Get() {
  
//   const [user, setUser] = useState([]);
//   const getAllUsers = () => {
//     axios.get('http://localhost:8000/api/users')
//         .then((res) => {
//             console.log(res);
//             setUser(res.data.users);
//         })
//         .catch((err) => {                         
//             console.error('Error fetching users:', err);
//         });
// };

// useEffect(() => {
//     getAllUsers();
// }, []);

// return (
//     <>
//     {user.map((val) => {
//       return (
//         <div key={val.id}>
//             <div>
//                 <h2 style={{ margin: 0 }}>Name:</h2>
//                 <p style={{ margin: 0 }}>{val.name}</p>
//             </div>
//             <div style={{ margin: '20px 0' }}>
//                 <h2 style={{ margin: 0 }}>Age:</h2>
//                 <p style={{ margin: 0 }}>{val.age}</p>
//             </div>
//             <div style={{ margin: '20px 0' }}>
//                 <h2 style={{ margin: 0 }}>Email:</h2>
//                 <p style={{ margin: 0 }}>{val.email}</p> <hr/>
//             </div>
//         </div>
//       );
//     })}
//     </>

// );
// }

// export default Get;