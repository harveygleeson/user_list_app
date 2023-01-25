import { BarLoader } from "react-spinners";
import { useMachine } from "@xstate/react";
import { useEffect } from "react";
import UserList from "../components/Users/UserList";
import { userStateMachine } from "../state/UserStateMachine";

import "./Home.css";

const Home = () => {
  const [state, send] = useMachine(userStateMachine);
  useEffect(() => {
    send("FETCH");
  });

  return (
    <>
      {state.matches("loading") && (
        <div className="loading-center">
          <BarLoader color="green" />
        </div>
      )}
      {state.matches("dataFound") && (
        <UserList usernameList={state.context.userData} />
      )}
      {state.matches("noDataFound") && (
        <UserList usernameList={state.context.userData} />
      )}
    </>
  );
};

export default Home;
