import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import UserDisplay from "../components/User/UserDisplay";
import "./Home.css";

type UserData = {
  id: number;
  avatar?: string;
  first_name: string;
  last_name: string;
  email: string;
  emailVerified: boolean;
  dob: string;
  company: {
    name: string;
    department: string;
  };
  skills: Array<string>;
};

const User = () => {
  let { id } = useParams();
  const [userData, setUserData] = useState<UserData | undefined>();
  const [userIsLoading, setUserIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/user/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setUserData(json);
        setUserIsLoading(false);
      })
      .catch((e: Error) => {
        console.log(e);
        setUserIsLoading(false);
      });
  }, []);

  return (
    <>
      {userIsLoading ? (
        <div className="loading-center">
          <BarLoader color="green" />
        </div>
      ) : (
        <UserDisplay data={userData} />
      )}
    </>
  );
};

export default User;
