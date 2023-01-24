import Card from "../UI/Card";

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

type UserSubdisplayProps = {
  data?: UserData;
};
const UserSubdisplay = (props: UserSubdisplayProps) => {
  return (
    <Card className="user-item">
      <div className="column-container">
        <div className="column-row">
          <h2>Email:</h2>
          <p>{props.data?.email}</p>
          <h2>Verified:</h2>
          <p>{props.data?.emailVerified ? "Yes" : "No"}</p>
        </div>
        <div className="column-row">
          <h2>Date of Birth:</h2>
          <p>{props.data?.dob}</p>
        </div>
      </div>
    </Card>
  );
};

export default UserSubdisplay;
