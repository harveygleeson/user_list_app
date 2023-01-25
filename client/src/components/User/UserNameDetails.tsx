import Card from "../UI/Card";
import noImageLogo from "../../assets/No-image-found.jpeg";

type UsernameDetails = {
  avatar?: string;
  first_name: string;
  last_name: string;
};

const UserNameDetails = (usernameDetails: UsernameDetails) => {
  return (
    <Card className="user-item">
      {usernameDetails.avatar !== undefined ? (
        <img
          className="user-image"
          src={usernameDetails.avatar}
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
        {usernameDetails.first_name} {usernameDetails.last_name}
      </h2>
    </Card>
  );
};

export default UserNameDetails;
