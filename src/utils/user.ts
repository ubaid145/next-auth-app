import axios from "axios";

const getUserByEmail = async (email: string) => {
  const response = await axios.get(`${process.env.JSON_SERVER_HOST}/user`);
  const { data } = response;
  const user = data?.filter((u: { email: string }) => u.email === email);
  if (user.length) {
    return user[0];
  }
  return {};
};

export { getUserByEmail };
