import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";

import "./UserListItem.css";

type UserListItemProps = {
  item: {
    id: number;
    first_name: string;
    last_name: string;
  };
};

const UserListItem = ({ item }: UserListItemProps) => {
  const navigate = useNavigate();
  return (
    <li onClick={() => navigate(`/users/${item.id}`)}>
      <Card className="user-list-item">
        <h3>
          {item.first_name} {item.last_name}
        </h3>
      </Card>
    </li>
  );
};

export default UserListItem;
