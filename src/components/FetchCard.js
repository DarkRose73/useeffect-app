import React, { useEffect, useState } from "react";
import getPosts from "../helpers/getPosts";
import getUser from "../helpers/getUser";

const initialUser = {
  name: "user",
  email: "user1@gmail.com",
};

const initialPost = [
  {
    id: 1,
    title: "post 1",
  },
  {
    id: 2,
    title: "post 2",
  },
];

const FetchCard = () => {
  const [user, setUser] = useState(initialUser);
  const [posts, setPosts] = useState(initialPost);

  const updateUser = () => {
    getUser().then((newUser) => {
      setUser(newUser);
    });
  };

  const updatePosts = () => {
    getPosts(user.id).then((newPost) => {
      setPosts(newPost);
    });
  };

  useEffect(() => {
    updateUser();
  }, []);

  useEffect(() => {
    user.id && updatePosts();
  }, [user, updatePosts]);

  return (
    <div>
      <button
        onClick={() => {
          updateUser();
        }}
      >
        Change user
      </button>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <br />
      <h2>Posts - user: {user.id}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchCard;
