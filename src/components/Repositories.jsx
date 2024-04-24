import React, { useEffect, useState } from "react";


function Repositories() {
  const [user, setUser] = useState([]);
  const [currentPosition, setCurrentPositon] = useState(0);

  const fetchData = () => {
    return fetch(
      `https://api.github.com/users/LuckDayz/repos?per_page=6&page=${currentPosition}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        if (data === 0) {
          setCurrentPositon(0);
        }
      });
  };
  useEffect(() => {
    fetchData();
  }, [currentPosition]);

  function handleNext(e) {
    e.preventDefault();
    setCurrentPositon((prev) => prev + 1);
  }

  function handlePrevious(e) {
    e.preventDefault();
    setCurrentPositon((prev) => prev - 1);
  }
 
  const repo = user.map((item) => {
    return (
      <div className="box-content" key={item.id}>
        <div className="content-style">
          <p className="branch-style">Branch: {item.default_branch}</p>
          <div className="wrap-contnt">
            <h1> {item.name}</h1>
            <p className="pStyle">{item.visibility}</p>
          </div>
        </div>
        <p>{item.language}</p>
        <p>Created at: {item.created_at}</p>
      </div>
    );
  });

  return (
    <div className="repoPage">
      <div className="repo-head">
        <h1>Repositories</h1>
      </div>
      <div className="box">{repo}</div>
      <div className="repoButton">
        <button onClick={handlePrevious}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Repositories;
