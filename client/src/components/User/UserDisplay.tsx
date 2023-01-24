import Card from "../UI/Card";
import "./UserDisplay.css";
import UserSubdisplay from "./UserSubdisplay";
import UserCompany from "./UserCompany";
import UserNameDetails from "./UserNameDetails";

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

type UserDataProps = {
  data?: UserData;
};

const UserDisplay = (props: UserDataProps) => {
  return (
    <Card className="user-boundary">
      <h1>User:</h1>
      <UserNameDetails data={props.data} />
      <h1>Contact:</h1>
      <UserSubdisplay data={props.data} />
      <h1>Company:</h1>
      <UserCompany data={props.data} />
    </Card>
  );
};

export default UserDisplay;