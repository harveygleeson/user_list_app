import Card from "../UI/Card";
import "./UserDisplay.css";
import UserSubdisplay from "./UserSubdisplay";
import UserCompany from "./UserCompany";
import UserNameDetails from "./UserNameDetails";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

type UserDataProps = {
  data?: UserData;
};

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

const UserDisplay = (props: UserDataProps) => {
  const navigate = useNavigate();

  return (
    <div>
      {props.data === undefined && (
        <Card className="user-boundary">
          <h1>No User Found</h1>
        </Card>
      )}
      {props.data && (
        <Card className="user-boundary">
          <Button onClick={() => navigate("/users")}>Back to Users</Button>
          <h1>User:</h1>
          <UserNameDetails
            first_name={props.data.first_name}
            last_name={props.data.last_name}
            avatar={props.data.avatar}
          />
          <h1>Contact:</h1>
          <UserSubdisplay
            email={props.data.email}
            emailVerified={props.data.emailVerified}
            dob={props.data.dob}
          />
          <h1>Company:</h1>
          <UserCompany
            name={props.data.company.name}
            department={props.data.company.department}
            skills={props.data.skills}
          />
        </Card>
      )}
    </div>
  );
};

export default UserDisplay;
