import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function User({
  getUser,
  loading,
  user: {
    name,
    avatar_url,
    location,
    bio,
    html_url,
    followers,
    following,
    public_gists,
    public_repos,
    hireable,
  },
}) {
  const { login } = useParams();

  useEffect(() => {
    getUser(login);
  }, []);

  return <div>{name}</div>;
}

export default User;
