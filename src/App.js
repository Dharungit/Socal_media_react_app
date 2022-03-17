import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home/Home.js";
import Form from "./components/form/form.js";
import Auth from "./components/auth/auth";
import PostDetails from "./components/postDetails/postDetails";

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="font-pop">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/auth" />} />
          <Route
            exact
            path="/posts"
            element={<Home setCurrentId={setCurrentId} />}
          />
          <Route
            exact
            path="/posts/search"
            element={<Home setCurrentId={setCurrentId} />}
          />
          <Route exact path="/posts/:id" element={<PostDetails />} />
          <Route
            path="/form"
            element={<Form currentId={currentId} setCurrentId={setCurrentId} />}
          />
          <Route
            path="/auth"
            element={!user ? <Auth /> : <Navigate to="/posts" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
