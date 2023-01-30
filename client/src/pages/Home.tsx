import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import UserList from "../components/Users/UserList";
import { getUsernames } from "../services/apiServices";

import "./Home.css";

type Username = {
  id: number;
  first_name: string;
  last_name: string;
};

const Home = () => {
  const [users, setUsers] = useState<Username[] | undefined>();
  const [homeIsLoading, setHomeIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await getUsernames();
      setUsers(response);
      setHomeIsLoading(false);
    } catch (error) {
      console.log("Error:", error);
      setHomeIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
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
