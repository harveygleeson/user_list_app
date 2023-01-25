import Card from "../UI/Card";

// type UserData = {
//   id: number;
//   avatar?: string;
//   first_name: string;
//   last_name: string;
//   email: string;
//   emailVerified: boolean;
//   dob: string;
//   company: Company;
//   skills: Array<string>;
// };

type Company = {
  name: string;
  department: string;
};

const UserCompany = (company: Company) => {
  return (
    <Card className="user-item">
      <div className="column-container">
        <div className="column-row">
          <h2>Name:</h2>
          <p>{company.name}</p>
          <h2>Department:</h2>
          <p>{company.department}</p>
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
