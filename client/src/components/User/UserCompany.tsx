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

type UserCompanyProps = {
  data?: UserData;
};
const UserCompany = (props: UserCompanyProps) => {
  return (
    <Card className="user-item">
      <div className="column-container">
        <div className="column-row">
          <h2>Name:</h2>
          <p>{props.data?.company.name}</p>
          <h2>Department:</h2>
          <p>{props.data?.company.department}</p>
        </div>
        <div className="column-row">
          <h2>Skills:</h2>
          <p>skills here</p>
        </div>
      </div>
    </Card>
  );
};

export default UserCompany;
