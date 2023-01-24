import { useEffect, useState } from "react";
import UserList from "../components/Users/UserList";

// const DUMMY_DATA: UserData[] = [
//   {
//     id: 1,
//     avatar: "https://robohash.org/porroenimfugiat.png?size=100x100&set=set1",
//     first_name: "Erroll",
//     last_name: "Pritchard",
//     email: "epritchard0@acquirethisname.com",
//     emailVerified: false,
//     dob: "1982-10-24",
//     company: { name: "Jaloo", department: "Human Resources" },
//     skills: ["TPNS", "DDIC", "Data Warehousing"],
//   },
//   {
//     id: 2,
//     avatar: "https://robohash.org/velrecusandaefuga.png?size=100x100&set=set1",
//     first_name: "Sallie",
//     last_name: "Maddie",
//     email: "smaddie1@amazon.com",
//     emailVerified: true,
//     dob: "1986-12-24",
//     company: { name: "Fivespan", department: "Legal" },
//     skills: ["HDCAM", "EWSD", "Small Boat Operations"],
//   },
//   {
//     id: 3,
//     first_name: "Shaylyn",
//     last_name: "Roslen",
//     email: "sroslen2@unesco.org",
//     emailVerified: true,
//     dob: "1987-05-23",
//     company: { name: "Demimbu", department: "Human Resources" },
//     skills: ["Rural Marketing", "GPS Units", "SWOT analysis"],
//   },
// ];

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

const Home = () => {
  const [users, setUsers] = useState<UserData[] | undefined>();

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        // console.log(users);
      });
  }, []);

  return (
    <div>
      <UserList usernameList={users} />
    </div>
  );
};

export default Home;
