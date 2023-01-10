
import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Home.scss";

const Home = () => {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setPostList] = useState([]);

  const loadData = () => {
    fetch("/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPostList(result);
        },
        (error) => {
          setError(error);
          isLoaded(true);
        }
      );
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      {error ? (
        { error }
      ) : (
        <div className="homepage">
          {postList.map((post) => (
            <div key={post.id}>
              <Post {...post} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
