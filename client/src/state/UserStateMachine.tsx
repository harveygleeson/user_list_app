import { createMachine, assign } from "xstate";

const fetchUsers = () =>
  fetch("http://localhost:8000/usernames").then((response) => response.json());

export const userStateMachine = createMachine(
  {
    id: "user",
    initial: "idle",
    context: {
      userData: [],
    },
    states: {
      idle: {
        on: {
          FETCH: { target: "loading" },
        },
      },
      loading: {
        invoke: {
          src: (context, event) => fetchUsers(),
          onDone: {
            target: "dataFound",
            actions: "assignUserData",
          },
          onError: {
            cond: "fetchFailed",
            target: "noDataFound.fetchFailed",
            actions: "noUserDataFound",
          },
        },
      },
      noDataFound: {
        states: {
          fetchFailed: {},
        },
      },
      dataFound: {},
    },
  },
  {
    actions: {
      assignAction: assign({
        userData: (context, event: any) => {
          return event.data;
        },
      }),
      noUserDataFound: assign({
        userData: (context, event: any) => {
          return [];
        },
      }),
    },
  }
);
