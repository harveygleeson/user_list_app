export const getUsernames = async () => {
  const res = await fetch("http://localhost:8000/usernames");
  const json = await res.json();
  return json;
};

export const getUserData = async (id: string) => {
  const res = await fetch(`http://localhost:8000/user/${id}`);
  const json = await res.json();
  return json;
};
