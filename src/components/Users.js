import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../Redux/users/userSlice";

const UsersList = () => {
  const { users, isLoading, error } = useSelector(state => state.Users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]); 



  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name.first} {user.name.last}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
          }
export default UsersList;
