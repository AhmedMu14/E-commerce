import React, { useEffect, useState } from "react";
import axios from "axios";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000/users?page=${page}`);
      console.log(res.data)
      setUsers(res.data); 
    };
    fetchUsers();
  }, [page]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-3">Users Page {page}</h2>
      <ul>  
        {users.map((u) => (
          <li key={u._id}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Prev
        </button>

        <button
          onClick={() => setPage(page + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UsersList;
