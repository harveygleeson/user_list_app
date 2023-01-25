export const getUserData = (
  id: string,
  setData: (json: JSON) => void,
  setLoading: (state: boolean) => void
) => {
  fetch(`http://localhost:8000/user/${id}`)
    .then((response) => response.json())
    .then((json) => {
      setData(json);
      setLoading(false);
    })
    .catch((e: Error) => {
      console.log(e);
      setLoading(false);
    });
};

export const getUsernames = () => {
  fetch("http://localhost:8000/usernames").then((response) => response.json());
  //   .then((json) => {
  //     setUsers(json);
  //     setHomeIsLoading(false);
  //   })
  // .catch((e: Error) => {
  //   console.log(e);
  // //   setHomeIsLoading(false);
  // });
};
