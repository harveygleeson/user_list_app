import Card from "../UI/Card";

type Company = {
  name: string;
  department: string;
  skills: Array<string>;
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

          <p>
            {company.skills.map((skill) => {
              if (skill !== company.skills[company.skills.length - 1])
                return `${skill}, `;
              return `${skill}.`;
            })}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default UserCompany;
