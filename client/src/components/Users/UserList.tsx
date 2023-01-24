import Card from "../UI/Card";
import UserListItem from "./UserListItem";

import "./UserList.css";

// import ExpenseItem from "./ExpenseItem";
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

type usernameProps = {
  usernameList?: UserData[];
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
