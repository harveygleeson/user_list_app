import Card from "../UI/Card";
import noImageLogo from "../../assets/No-image-found.jpeg";

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

type UserNameDetailProps = {
  data?: UserData;
};
const UserNameDetails = (props: UserNameDetailProps) => {
  return (
    <Card className="user-item">
      {props.data?.avatar !== undefined ? (
        <img
          className="user-image"
          src={props.data?.avatar}
          alt="User Profile "
        />
      ) : (
        <img
          className="user-image"
          src={noImageLogo}
          alt="No User Profile Found"
        />
      )}
      <h2>
        {props.data?.first_name} {props.data?.last_name}
      </h2>
    </Card>
    // <Card className="user-item">
    //   <div className="column-container">
    //     <div className="column-row">
    //       <h2>Email:</h2>
    //       <p>{props.data?.email}</p>
    //       <h2>Verified:</h2>
    //       <p>{props.data?.emailVerified ? "Yes" : "No"}</p>
    //     </div>
    //     <div className="column-row">
    //       <h2>Date of Birth:</h2>
    //       <p>{props.data?.dob}</p>
    //     </div>
    //   </div>
    // </Card>
  );
};

export default UserNameDetails;
