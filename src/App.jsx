import React, { useEffect, useState } from "react";
import { fetchPosts } from "./Apiservice";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const loadPosts = async () => {
    try {
      const response = await fetchPosts();
      setPosts(response);
    } catch (err) {
      setError("Failed to fetch posts");
      console.error("Error fetching data:", err);
    }
  };

  const mapData = posts.map((x, i) => <li key={i}>{x.title}</li>);

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {error && <p>{error}</p>}
      {posts ? <ul>{mapData}</ul> : <p>Loading...</p>}
    </div>
  );
}

export default App;
