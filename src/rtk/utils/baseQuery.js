
import { getter } from "./StorageUtil";
import axios from "./axios"

const baseQuery = async (arg, api, extraOptions) => {
  const token = JSON.parse(getter("user"))?.access_token;

  const headers = token ? { Authorization: `${token}` } : {};
  const response = await axios({
    ...arg,
    headers: {
      ...headers,
      ...arg.headers,
    },
  });
  return (response.status === 200 || response.status === 201)  ? {data : response.data} : {error : response.data};
};

export default baseQuery;
