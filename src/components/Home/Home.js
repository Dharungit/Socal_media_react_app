import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Posts from "../Posts/Posts.js";
import Header from "../Header/Header.js";

function Home({ setCurrentId }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  });

  return (
    <div>
      <Header />
      <Posts setCurrentId={setCurrentId} />
    </div>
  );
}

export default Home;
