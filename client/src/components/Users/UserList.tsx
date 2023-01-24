import Card from "../UI/Card";
import UserListItem from "./UserListItem";

import "./UserList.css";

type Username = {
  id: number;
  first_name: string;
  last_name: string;
};

type usernameProps = {
  usernameList?: Username[];
};

const UserList = ({ usernameList }: usernameProps) => {
  if (usernameList === null || usernameList?.length === 0) {
    return <h2 className="user-list-empty">Found no user data.</h2>;
  }

  return (
    <Card className="user-list-boundary">
      <h2>Users:</h2>
      <ul className="user-list">
        {usernameList?.map((user) => {
          return <UserListItem item={user} key={user.id} />;
        })}
      </ul>
    </Card>
  );
};

export default UserList;
