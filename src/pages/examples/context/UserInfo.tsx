
import React, { useContext } from 'react';

import { UserContext } from "./index";

const UserInfo = () => {
  const { userName } = useContext(UserContext);
  return <span>{userName}</span>;
};

export default UserInfo;
