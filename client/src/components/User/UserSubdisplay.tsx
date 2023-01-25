import Card from "../UI/Card";

type SubdisplayDetails = {
  email: string;
  emailVerified: boolean;
  dob: string;
};

const UserSubdisplay = (userSubdisplay: SubdisplayDetails) => {
  return (
    <Card className="user-item">
      <div className="column-container">
        <div className="column-row">
          <h2>Email:</h2>
          <p>{userSubdisplay.email}</p>
          <h2>Verified:</h2>
          <p>{userSubdisplay.emailVerified ? "Yes" : "No"}</p>
        </div>
        <div className="column-row">
          <h2>Date of Birth:</h2>
          <p>{userSubdisplay.dob}</p>
        </div>
      </div>
    </Card>
  );
};

export default UserSubdisplay;
