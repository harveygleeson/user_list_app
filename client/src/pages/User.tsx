import { useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  let { id } = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:8000/users/${id}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //     });
  // }, []);

  console.log(id);
  return <div>Users page for user {id}</div>;
};

export default User;
