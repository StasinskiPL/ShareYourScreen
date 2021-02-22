import { v4 as uuid } from "uuid";

const getUserId = () => {
  let id = localStorage.getItem("userId");
  if (!id) {
    id = uuid();
    localStorage.setItem("userId", id);
  }
  return id;
};

export default getUserId;