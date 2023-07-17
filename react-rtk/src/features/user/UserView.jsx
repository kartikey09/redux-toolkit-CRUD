import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {user.loading && <div>loading...</div>}
      {user.loading && user.error ? <div>Error: {u.error}</div> : null}
      {!user.loading && user.users.length && (
        <div>
          <ul>
            {user.users.map((u) => (
              <li key={u.id}>{u.name}</li>
            ))}
          </ul>
        </div>
      )}
      {}
    </div>
  );
};
