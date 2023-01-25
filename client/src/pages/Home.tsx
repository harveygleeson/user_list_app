import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import UserList from "../components/Users/UserList";

import "./Home.css";

type Username = {
  id: number;
  first_name: string;
  last_name: string;
};

const Home = () => {
  const [users, setUsers] = useState<Username[] | undefined>();
  const [homeIsLoading, setHomeIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/usernames")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setHomeIsLoading(false);
      })
      .catch(() => {
        setHomeIsLoading(false);
      });
  }, []);

  return (
    <>
      {homeIsLoading ? (
        <div className="loading-center">
          <BarLoader color="green" />
        </div>
      ) : (
        <UserList usernameList={users} />
      )}
    </>
  );
};

export default Home;
