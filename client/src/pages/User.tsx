import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserDisplay from "../components/User/UserDisplay";

type UserData = {
  id: number;
  avatar?: string;
  first_name: string;
  last_name: string;
  email: string;
  emailVerified: boolean;
  dob: string;
  company: Company;
  skills: Array<string>;
};

type Company = {
  name: string;
  department: string;
};

const User = () => {
  let { id } = useParams();
  const [userData, setUserData] = useState<UserData | undefined>();

  useEffect(() => {
    fetch(`http://localhost:8000/user/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setUserData(json);
      });
  }, [id]);

  return <UserDisplay data={userData} />;
};

export default User;
