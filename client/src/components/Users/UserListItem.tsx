import Card from "../UI/Card";
import "./UserListItem.css";

type UserListItemProps = {
  item: {
    first_name: string;
    last_name: string;
  };
};

const UserListItem = ({ item }: UserListItemProps) => {
  return (
    <li>
      <Card className="user-list-item">
        <h3>
          {item.first_name} {item.last_name}
        </h3>
      </Card>
    </li>
  );
};

export default UserListItem;
