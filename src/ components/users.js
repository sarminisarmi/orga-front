

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Users = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const token = sessionStorage.getItem('token'); 
//     if (token) {
//       axios.get('http://localhost:5002/user', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       })
//         .then(response => {
//           console.log('API response:', response.data); // Debugging API response
//           setUsers(Array.isArray(response.data) ? response.data : []); // Set users if it's an array
//         })
//         .catch(error => console.error('Error fetching users:', error));
//     }
//   }, []);

//   const deleteUser = (userId) => {
//     const token = sessionStorage.getItem('token');
//     axios.delete(`http://localhost:5002/api/auth/users/${userId}`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//       .then(() => {
//         setUsers(users.filter(user => user._id !== userId));
//       })
//       .catch(error => console.error('Error deleting user:', error));
//   };

//   return (
//     <div>
//       <h1>Users</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Email</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user._id}>
//               <td>{user._id}</td>
              
//               <td>{user.email}</td>
//               <td><button onClick={() => deleteUser(user._id)}>Delete</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Users;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const itemsPerPage = 10; // Number of users per page

  useEffect(() => {
    const token = sessionStorage.getItem('token'); 
    if (token) {
      axios.get('http://localhost:5002/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          console.log('API response:', response.data); // Debugging API response
          setUsers(Array.isArray(response.data) ? response.data : []); // Set users if it's an array
        })
        .catch(error => console.error('Error fetching users:', error));
    }
  }, []);

  const deleteUser = (userId) => {
    const token = sessionStorage.getItem('token');
    axios.delete(`http://localhost:5002/api/auth/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        setUsers(users.filter(user => user._id !== userId));
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  // Pagination functions
  const nextPage = () => {
    if (currentPage * itemsPerPage < users.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get the users for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedUsers = users.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedUsers.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.email}</td>
              <td><button onClick={() => deleteUser(user._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={previousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={nextPage} disabled={currentPage * itemsPerPage >= users.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
