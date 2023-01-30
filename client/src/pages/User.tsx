import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import UserDisplay from "../components/User/UserDisplay";
import { getUserData } from "../services/apiServices";
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

  const fetchUserData = async (id: string) => {
    try {
      const response = await getUserData(id);
      setUserData(response);
      setUserIsLoading(false);
    } catch (error) {
      console.log("Error:", error);
      setUserIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchUserData(id);
    }
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
