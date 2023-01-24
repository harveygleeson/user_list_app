import { useEffect } from "react";
import { useParams } from "react-router-dom";
const User = () => {
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/user/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }, []);

  return <div>Users page for user </div>;
};

export default User;
